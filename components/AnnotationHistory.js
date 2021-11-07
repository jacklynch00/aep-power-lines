import React from "react";
import {GrView} from "react-icons/gr";
import {Flex, Avatar, Stack, Text, Button, Icon} from "@chakra-ui/react";

const AnnotationHistory = ({messages}) => {
  return (
    <Flex
      backgroundColor="gray.300"
      p="20px"
      flexDirection="column"
      width="100%"
    >
      {messages && messages?.length > 0 ? (
        messages.map((message, index) => {
          return (
            <Flex
              justifyContent="flex-start"
              alignItems="center"
              mb="20px"
              key={index}
            >
              <Avatar mr="10px" />
              <Stack spacing={2}>
                <Text fontSize="xs" p={0} colorScheme="gray" color="gray.700">
                  users email
                </Text>
                <Text p={0} colorScheme="gray" color="gray.700">
                  users annotaion message
                </Text>
              </Stack>
            </Flex>
          );
        })
      ) : (
        <>
          <Flex justifyContent="flex-start" alignItems="center" mb="20px">
            <Avatar mr="10px" />
            <Stack spacing={2}>
              <Text fontSize="xs" p={0} colorScheme="gray" color="gray.700">
                users email
              </Text>
              <Text p={0} colorScheme="gray" color="gray.700">
                users annotaion message example
              </Text>
            </Stack>
            <Button ml={8} color="gray.600" colorScheme="blue">
              View Annotation{" "}
              <Icon color="gray.600" colorScheme="gray" ml={2} as={GrView} />
            </Button>
          </Flex>
          <Flex justifyContent="flex-start" alignItems="center" mb="20px">
            <Avatar mr="10px" />
            <Stack spacing={2}>
              <Text fontSize="xs" p={0} colorScheme="gray" color="gray.700">
                users email
              </Text>
              <Text p={0} colorScheme="gray" color="gray.700">
                users annotaion message example
              </Text>
            </Stack>
            <Button ml={8} color="gray.600" colorScheme="blue">
              View Annotation{" "}
              <Icon color="gray.600" colorScheme="gray" ml={2} as={GrView} />
            </Button>
          </Flex>
          <Flex justifyContent="flex-start" alignItems="center" mb="20px">
            <Avatar mr="10px" />
            <Stack spacing={2}>
              <Text fontSize="xs" p={0} colorScheme="gray" color="gray.700">
                users email
              </Text>
              <Text p={0} colorScheme="gray" color="gray.700">
                users annotaion message example
              </Text>
            </Stack>
            <Button ml={8} color="gray.600" colorScheme="blue">
              View Annotation{" "}
              <Icon color="gray.600" colorScheme="gray" ml={2} as={GrView} />
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default AnnotationHistory;
