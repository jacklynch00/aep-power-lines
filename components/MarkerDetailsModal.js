import React, {useState} from "react";
import {Icon} from "@chakra-ui/react";
import {GiPlainCircle} from "react-icons/gi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Tag,
  Text,
  Image,
  Button,
  Link,
  useDisclosure
} from "@chakra-ui/react";

const MarkerDetailsModal = ({data}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Icon
        _hover={{cursor: "pointer"}}
        as={GiPlainCircle}
        w={3}
        h={3}
        color="red"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold">Pole ID: {data.id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} display="flex" flexDirection="column">
            <Box display="flex" pt="10px" pb="10px">
              <Text>Latitude</Text>
              <Tag ml="10px" backgroundColor="gray.200" color="gray.700">
                {data.latitude}
              </Tag>
            </Box>
            <Box display="flex" pt="10px" pb="10px">
              <Text>Longitude</Text>
              <Tag ml="10px" backgroundColor="gray.200" color="gray.700">
                {data.longitude}
              </Tag>
            </Box>
            <Box display="flex" pt="10px" pb="10px">
              <Text>Altitude</Text>
              <Tag ml="10px" backgroundColor="gray.200" color="gray.700">
                {data.altitude}
              </Tag>
            </Box>
            <Box display="flex" pt="10px" pb="10px">
              <Text>Image Preview</Text>
            </Box>
            <Image src={data.imageUrl} />
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Close
            </Button>
            <Button
              backgroundColor="blue.400"
              colorScheme="blue"
              color="gray.50"
              fontWeight="medium"
            >
              <Link href={`/images/${data.id}`}>Review</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MarkerDetailsModal;
