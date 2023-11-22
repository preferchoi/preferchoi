import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, Box, Text, theme } from '@chakra-ui/react';
import FilmList from './compnents/film/FilmList';
import { createApolloClient } from "./apollo/createApolloClient";

const apolloClient = createApolloClient()

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
