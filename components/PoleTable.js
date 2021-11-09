import React from "react";
import {Box, Link, Button} from "@chakra-ui/react";

import {Table, Tr, Th, Td} from "./Table";
import {convertLink, getReviewStatus} from "@/utils/general";

const PoleTable = ({poles}) => {
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
        {poles.map((pole) => {
          return (
            <Box as="tr" key={pole.id}>
              <Td>{pole.id}</Td>
              <Td>{pole.latitude.toFixed(5)}</Td>
              <Td>{pole.longitude.toFixed(5)}</Td>
              <Td>{pole.altitude}</Td>
              <Td>{getReviewStatus(pole.reviewStatus)}</Td>
              <Td>
                <Button
                  backgroundColor="blue.400"
                  colorScheme="blue"
                  color="gray.50"
                >
                  <Link href={`/images/${convertLink(pole.id)}`}>Review</Link>
                </Button>
              </Td>
            </Box>
          );
        })}
      </tbody>
    </Table>
  );
};

export default PoleTable;
