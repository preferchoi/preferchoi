import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { createApolloClient } from './apollo/createApolloClient';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Film from './pages/Film';
import SignUp from './pages/SignUp';
import Login from "./pages/Login";

const apolloClient = createApolloClient();

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/film/:filmId" Component={Film} />
          <Route path="/SignUp" Component={SignUp} />
          <Route path="/Login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </ApolloProvider>
);
