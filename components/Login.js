import React, { useState } from 'react';
import { Flex, Text, Stack, Input, Button, Link } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

const Login = () => {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  };

  const handleSubmit = () => {
    auth.signInUser(email, password);
  };

  return (
    <Flex height="100%" justifyContent="center" alignItems="center">
      <Flex
        flexDirection="column"
        backgroundColor="gray.500"
        borderRadius={10}
        p="20px"
      >
        <Flex alignItems="center" justifyContent="center" pb="20p">
          <Text fontSize="3xl" backgroundColor="wht" color="white">
            AEP Power Lines Login
          </Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" p="20px">
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              backgroundColor="white"
              color="gray.700"
              _placeholder={{ color: 'gray.400' }}
              onChange={handleChange}
              value={email}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              backgroundColor="white"
              color="gray.700"
              _placeholder={{ color: 'gray.400' }}
              onChange={handleChange}
              value={password}
            />
          </Stack>
        </Flex>
        <Flex alignItems="center" justifyContent="space-around" pt="20px">
          <Link color="white" href="/signup">
            Sign Up
          </Link>
          <Button variant="solid" size="md" onClick={handleSubmit}>
            Login
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
