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
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

const CreateUserModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
      </Button>
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
                <Input placeholder="Full Name" />
              </FormControl>
              {/* Right */}
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input placeholder="Role" />
              </FormControl>
            </Flex>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                resize={"none"}
                overflowY={"hidden"}
                placeholder="afkljdkajfklsjdfkljdasddklfjk fa skdfjklasjf laksjdf dajsklf kalsdjfk dlkkd  a sd"
              />
            </FormControl>
            <RadioGroup mt={4}>
              <Flex gap={5}>
                <Radio value="male">Male</Radio>
                <Radio value="female">female</Radio>
              </Flex>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>Add</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateUserModal;
