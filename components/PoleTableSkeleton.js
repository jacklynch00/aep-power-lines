import React from "react";
import {Box, Skeleton} from "@chakra-ui/react";
import {Table, Tr, Th, Td} from "./Table";

const SkeletonRow = ({width}) => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
  </Box>
);

const SiteTableSkeleton = () => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Image Name</Th>
          <Th>Lat</Th>
          <Th>Lng</Th>
          <Th>Altitude (ft)</Th>
          <Th>Review Status</Th>
          <Th>Review</Th>
        </Tr>
      </thead>
      <tbody>
        <SkeletonRow width="75px" />
        <SkeletonRow width="50px" />
        <SkeletonRow width="50px" />
        <SkeletonRow width="70px" />
        <SkeletonRow width="25px" />
        <SkeletonRow width="75px" />
      </tbody>
    </Table>
  );
};

export default SiteTableSkeleton;
