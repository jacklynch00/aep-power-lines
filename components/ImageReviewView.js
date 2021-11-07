import React, {useEffect, useState} from "react";
import useSWR from "swr";
import _ from "lodash";
import {
  Flex,
  Heading,
  Divider,
  Box,
  Textarea,
  Text,
  Tag,
  Button,
  List,
  ListItem,
  ListIcon,
  useToast
} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import Annotation from "react-image-annotation";

import AnnotationHistory from "./AnnotationHistory";
import {createImageReview} from "@/lib/db";
import {getReviewStatus} from "@/utils/general";
import {useAuth} from "@/lib/auth";
import fetcher from "@/utils/fetcher";
import {dataAttr} from "@chakra-ui/utils";

const ImageReviewView = ({poleInfo}) => {
  const auth = useAuth();
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState("");
  const [annotation, setAnnotation] = useState({});
  const [annotations, setAnnotations] = useState([]);
  const [messages, setMessages] = useState([]);

  const {data, error} = useSWR(
    `/api/imageReviews?imageName=${poleInfo.imageName}`,
    fetcher
  );

  useEffect(() => {}, [data]);

  const uid = auth.user?.uid;

  var pole_name = poleInfo.imageName;
  var latitude = poleInfo.latitude;
  var longitude = poleInfo.longitude;
  var altitude = poleInfo.altitude;
  var imageUrl = poleInfo.imageUrl;
  var reviewStatus = getReviewStatus(poleInfo.reviewStatus);
  var state = "TBD";

  const submitReview = async () => {
    setLoading(true);
    await createImageReview(pole_name, uid, annotations, note);
    toast({
      title: "Success!",
      description: "Your review has been added!.",
      status: "success",
      duration: 4000,
      isClosable: true
    });
    setLoading(false);

    // Clear out state
    setAnnotation({});
    setAnnotations([]);
    setNote("");
  };

  const onChange = (annotation) => {
    setAnnotation(annotation);
  };

  const onSubmit = (annotation) => {
    const {geometry, data} = annotation;

    setAnnotation({});
    setAnnotations([
      ...annotations,
      {
        geometry,
        data: {
          ...data,
          id: Math.random()
        }
      }
    ]);
  };

  const removeAnnotation = (id) => {
    var newAannotations = _.filter(annotations, function (annotation) {
      return annotation.data.id !== id;
    });
    setAnnotations(newAannotations);
  };

  return (
    <Flex justifyContent="center">
      <Flex flexDirection="column">
        <Flex
          width="100%"
          flexDirection="row"
          backgroundColor="gray.50"
          p="20px"
          borderRadius={10}
        >
          <Annotation
            width="60%"
            height="auto"
            alt="Image Preview"
            src={imageUrl}
            annotations={annotations}
            value={annotation}
            onChange={onChange}
            onSubmit={onSubmit}
          />
          <Flex width="45%" flexDirection="column" p="20px">
            <Box
              mb={3}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Heading as="h3" mb="15px" color="blackAlpha.900">
                {pole_name}
              </Heading>
              {reviewStatus}
            </Box>
            <Divider borderColor="blackAlpha.500" />
            <Box display="flex" pt="10px" pb="10px" mt="10px">
              <Text color="gray.700" colorScheme="gray">
                Latitude
              </Text>
              <Tag ml="10px" backgroundColor="gray.200" color="gray.700">
                {latitude}
              </Tag>
            </Box>
            <Box display="flex" pt="10px" pb="10px">
              <Text color="gray.700" colorScheme="gray">
                Longitude
              </Text>
              <Tag ml="10px" backgroundColor="gray.200" color="gray.700">
                {longitude}
              </Tag>
            </Box>
            <Box display="flex" pt="10px" pb="10px" mt="10px">
              <Text color="gray.700" colorScheme="gray">
                Altitude
              </Text>
              <Tag ml="10px" backgroundColor="gray.200" color="gray.700">
                {altitude}
              </Tag>
            </Box>
            <Box display="flex" pt="10px" pb="10px">
              <Text color="gray.700" colorScheme="gray">
                State
              </Text>
              <Tag ml="10px" backgroundColor="gray.200" color="gray.700">
                {state}
              </Tag>
            </Box>
            <Heading
              as="h6"
              fontSize="1.5rem"
              mb="15px"
              mt="15px"
              color="blackAlpha.900"
            >
              Annotations
            </Heading>
            <>
              <Box mb={3}>
                <Textarea
                  backgroundColor="gray.100"
                  _placeholder={{color: "gray.400"}}
                  placeholder="Enter additional notes here"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </Box>
              <Box display="flex">
                <List
                  spacing={3}
                  display="flex"
                  flexDirection="column"
                  alignItems="space-between"
                >
                  {annotations.length > 0
                    ? annotations.map((annotation) => {
                        return (
                          <ListItem
                            p={2}
                            backgroundColor="gray.100"
                            borderRadius={10}
                            color="gray"
                          >
                            <ListIcon
                              as={DeleteIcon}
                              color="red.500"
                              _hover={{cursor: "pointer"}}
                              onClick={() =>
                                removeAnnotation(annotation.data.id)
                              }
                            />
                            {annotation.data.text}
                          </ListItem>
                        );
                      })
                    : null}
                </List>
              </Box>
              <Box display="flex" justifyContent="flex-end" pt="15px" pb="15px">
                <Button
                  variant="solid"
                  size="md"
                  colorScheme="blue"
                  backgroundColor="blue.500"
                  onClick={submitReview}
                >
                  Save Annotations
                </Button>
              </Box>
            </>
          </Flex>
        </Flex>
        <Flex mt={4} bgColor="gray.50">
          <AnnotationHistory messages={messages} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ImageReviewView;
