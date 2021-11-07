import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading
} from "@chakra-ui/react";
import AddImagesModal from "./AddImagesModal";

const DashboardTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink color="gray.700" fontSize="sm">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex flexDirection="row" justifyContent="space-between" mb={6}>
      <Heading color="gray.900">Home</Heading>
      <AddImagesModal />
    </Flex>
  </>
);

export default DashboardTableHeader;
