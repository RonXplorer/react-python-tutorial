import {
  Button,
  Flex,
  Modal,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";

const EditModal = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        variant={"ghost"}
        colorScheme="blue"
        aria-label="See menu"
        size={"sm"}
        icon={<BiEditAlt size={20} />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My new BFF😍</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
              {/* Left */}
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input value={user.name} />
              </FormControl>
              {/* Right */}
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input value={user.role} />
              </FormControl>
            </Flex>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                resize={"none"}
                overflowY={"hidden"}
                value={user.description}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
