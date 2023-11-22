import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { createApolloClient } from './apollo/createApolloClient';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Film from './pages/Film';

const apolloClient = createApolloClient();

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Main} />
          <Route path='/film/:filmId' Component={Film}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </ApolloProvider>
);
