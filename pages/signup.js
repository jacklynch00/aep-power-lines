import React, { useState } from 'react';
import { Flex, Text, Stack, Input, Button, Link } from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import { useAuth } from '@/lib/auth';

const Signup = () => {
  const auth = useAuth();
  const { control, handleSubmit } = useForm();

  const createNewUser = ({ name, email, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      console.log('password dont match');
      return;
    }

    auth.createNewUser(name, email, password);
  };

  return (
    <Flex
      as="main"
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="full"
      h="100vh"
      minW="300px"
    >
      <Flex height="100%" justifyContent="center" alignItems="center">
        <Flex
          flexDirection="column"
          backgroundColor="gray.500"
          borderRadius={10}
          p="20px"
          as="form"
          onSubmit={handleSubmit(createNewUser)}
        >
          <Flex alignItems="center" justifyContent="center" pb="20p">
            <Text fontSize="3xl" backgroundColor="wht" color="white">
              AEP Power Lines Sign Up
            </Text>
          </Flex>
          <Flex alignItems="center" justifyContent="center" p="20px">
            <Stack spacing={2} justifyContent="center" alignItems="center">
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    name="name"
                    type="text"
                    placeholder="Name"
                    backgroundColor="white"
                    color="gray.700"
                    _placeholder={{ color: 'gray.400' }}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    name="email"
                    type="email"
                    placeholder="Email"
                    backgroundColor="white"
                    color="gray.700"
                    _placeholder={{ color: 'gray.400' }}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    name="password"
                    type="password"
                    placeholder="Password"
                    backgroundColor="white"
                    color="gray.700"
                    _placeholder={{ color: 'gray.400' }}
                  />
                )}
              />
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    name="passwordConfirm"
                    type="password"
                    placeholder="Confirm Password"
                    backgroundColor="white"
                    color="gray.700"
                    _placeholder={{ color: 'gray.400' }}
                  />
                )}
              />
            </Stack>
          </Flex>
          <Flex alignItems="center" justifyContent="space-around" pt="20px">
            <Link color="white" href="/">
              Login
            </Link>
            <Button variant="solid" size="md" type="submit">
              Sign Up
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Signup;
