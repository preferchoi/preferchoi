import {
  ApolloClient,
  NormalizedCacheObject,
  from,
  HttpLink,
  operationName,
  fromPromise,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { createApolloCache } from './createApolloCache';
import { refreshAccessToken } from './auth';
let apolloClient: ApolloClient<NormalizedCacheObject>;

const errorLink = onError(
  // eslint-disable-next-line consistent-return
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      if (
        graphQLErrors.find((error) => error.message === 'access token expired')
      ) {
        return fromPromise(refreshAccessToken(apolloClient, operation))
          .filter((result) => !!result)
          .flatMap(() => forward(operation));
      }

      graphQLErrors.forEach(({ message, locations, path }) =>
        // eslint-disable-next-line no-console
        console.log(`[GraphQL error]: -> ${operationName}
      Message: ${message}, Query: ${path}, Location: ${JSON.stringify(
        locations,
      )}`),
      );
    }
    if (networkError) {
      // eslint-disable-next-line no-console
      console.log(`[networkError]: -> ${operation.operationName}
    Message: ${networkError.message}`);
    }
  },
);

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const authLink = setContext((request, prevContext) => {
  const accessToken = localStorage.getItem('access_token');
  return {
    headers: {
      ...prevContext.headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> =>
  new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: createApolloCache(),
    link: from([authLink, errorLink, httpLink]),
  });
