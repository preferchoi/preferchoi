import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import LoginForm from "../compnents/auth/LoginForm";
import CommonLayout from '../compnents/CommonLayout';
import React from 'react';

export default function Login(): React.ReactElement {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
      <CommonLayout>
        <Flex align={'center'} justify={'center'}>
          <LoginForm />
        </Flex>
      </CommonLayout>
    </Box>
  );
}
