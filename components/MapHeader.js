import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading
} from "@chakra-ui/react";

const MapHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink color="gray.700" fontSize="sm">
          Map
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex flexDirection="row" justifyContent="space-between" mb={6}>
      <Heading color="gray.900">Map</Heading>
    </Flex>
  </>
);

export default MapHeader;
