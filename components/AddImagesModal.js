import React, {useState} from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  useDisclosure
} from "@chakra-ui/react";
import {useForm, Controller} from "react-hook-form";

import {addImages} from "@/lib/db";
import {useAuth} from "@/lib/auth";

const AddImagesModal = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const toast = useToast();
  const {control, handleSubmit} = useForm();
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const auth = useAuth();

  const addNewImages = async ({images}) => {
    // TODO: Add something here to be added to the screen if it's taking a long time
    // TODO: Possibly add a progress bar
    setLoading(true);
    await addImages(selectedImages);
    toast({
      title: "Success!",
      description: "We've added your images!.",
      status: "success",
      duration: 4000,
      isClosable: true
    });
    onClose();
    setLoading(false);
    setSelectedImages([]);
  };

  const imagesSelected = (e) => {
    e.preventDefault();
    // console.log(e.target.files);
    setSelectedImages([...e.target.files]);
  };

  return (
    <>
      <Button
        variant="solid"
        backgroundColor="blue.400"
        colorScheme="blue"
        color="gray.50"
        size="md"
        onClick={onOpen}
      >
        Add New Images
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(addNewImages)}>
          <ModalHeader fontWeight="bold">Add New Images</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Controller
                name="images"
                control={control}
                defaultValue=""
                render={({field}) => (
                  <label>
                    <Input
                      {...field}
                      type="file"
                      multiple
                      onChange={imagesSelected}
                    />
                  </label>
                )}
              />
              <FormLabel>NOTE: All Image File Names Must Be Unique!</FormLabel>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              backgroundColor="blue.400"
              colorScheme="blue"
              color="gray.50"
              fontWeight="medium"
              type="submit"
              isLoading={loading}
              loadingText="Uploading Images"
              spinnerPlacement="end"
            >
              Add Images
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddImagesModal;
