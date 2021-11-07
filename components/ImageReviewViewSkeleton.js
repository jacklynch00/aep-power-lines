import React from "react";
import {
  Box,
  Skeleton,
  Flex,
  Heading,
  Text,
  Tag,
  Divider
} from "@chakra-ui/react";

const SkeletonEl = ({height, width}) => (
  <Box>
    <Skeleton height={height} w={width} my={4} />
  </Box>
);

const ImageReviewViewSkeleton = ({poleInfo}) => {
  return (
    <Flex justifyContent="center">
      <Flex
        width="100%"
        flexDirection="row"
        maxWidth="1000px"
        backgroundColor="gray.50"
        p="20px"
        borderRadius={10}
      >
        <SkeletonEl height="500px" width="500px" />
        <Flex width="45%" flexDirection="column" p="20px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading as="h3" mb="15px" color="blackAlpha.900">
              <SkeletonEl height="20px" width="150px" />
            </Heading>
            <SkeletonEl height="20px" width="50px" />
          </Box>

          <Divider borderColor="blackAlpha.500" />
          <Box display="flex" pt="10px" pb="10px" mt="10px">
            <Text color="gray.700" colorScheme="gray">
              Latitude
            </Text>
            <Tag ml="10px" backgroundColor="gray.200" color="gray.700">
              <SkeletonEl height="20px" width="90px" />
            </Tag>
          </Box>
          <Box display="flex" pt="10px" pb="10px">
            <Text color="gray.700" colorScheme="gray">
              Longitude
            </Text>
            <Tag ml="10px" backgroundColor="gray.200" color="gray.700">
              <SkeletonEl height="20px" width="90px" />
            </Tag>
          </Box>
          <Box display="flex" pt="10px" pb="10px" mt="10px">
            <Text color="gray.700" colorScheme="gray">
              Altitude
            </Text>
            <Tag ml="10px" backgroundColor="gray.200" color="gray.700">
              <SkeletonEl height="20px" width="60px" />
            </Tag>
          </Box>
          <Box display="flex" pt="10px" pb="10px">
            <Text color="gray.700" colorScheme="gray">
              State
            </Text>
            <Tag ml="10px" backgroundColor="gray.200" color="gray.700">
              <SkeletonEl height="20px" width="60px" />
            </Tag>
          </Box>
          <Box display="flex" justifyContent="flex-end" pt="15px" pb="15px">
            <SkeletonEl height="40px" width="60px" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ImageReviewViewSkeleton;
