import React from 'react';
import { Heading, Box, Text } from '@chakra-ui/react';

const EmptyState = () => (
  <Box
    backgroundColor="white"
    borderRadius="8px"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    p={8}
    mb={4}
    mt={4}
    minHeight="300px"
  >
    <Heading color="gray.600">No images to review!</Heading>
    <Text color="gray.600">Add Some Now!</Text>
  </Box>
);

export default EmptyState;
