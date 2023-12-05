import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import SignUpForm from '../compnents/auth/SignUpForm';
import CommonLayout from '../compnents/CommonLayout';

export default function SignUp(): React.ReactElement {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.800')}>
      <CommonLayout>
        <Flex align={'center'} justify={'center'}>
          <SignUpForm />
        </Flex>
      </CommonLayout>
    </Box>
  );
}
