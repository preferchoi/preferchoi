import {
  ApolloClient,
  NormalizedCacheObject,
  from,
  HttpLink,
  operationName,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { createApolloCache } from './createApolloCache';
import { request } from 'http';

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
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
});

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
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
