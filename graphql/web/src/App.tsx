import * as React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider, Box, Text, theme } from '@chakra-ui/react';
import FilmList from './compnents/film/FilmList';
import { PaginatedFilms } from './generated/graphql';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          films: {
            keyArgs: false,
            merge: (
              existing: PaginatedFilms | undefined,
              incoming: PaginatedFilms,
            ): PaginatedFilms => {
              return {
                cursor: incoming.cursor,
                films: existing
                  ? [...existing.films, ...incoming.films]
                  : incoming.films,
              };
            },
          },
        },
      },
    },
  }),
});

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Text>Edit and save to reload.</Text>
        <FilmList />
      </Box>
    </ChakraProvider>
  </ApolloProvider>
);
