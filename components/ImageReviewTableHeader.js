import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading
} from "@chakra-ui/react";

const ImageReviewTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink color="gray.700" fontSize="sm">
          Images
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex flexDirection="row" justifyContent="space-between" mb={6}>
      <Heading color="gray.900">Image Review</Heading>
    </Flex>
  </>
);

export default ImageReviewTableHeader;
