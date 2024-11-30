import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import EditModal from "./EditModal";

function UserCard({ user }) {
  return (
    <Card>
      <CardHeader>
        <Flex gap={4}>
          {/* left */}
          <Flex flex={1} gap={4} alignItems={"center"}>
            <Avatar src="https://avatar.iran.liara.run/public/boy?username=john%20doe" />
            <Box>
              <Heading size={"sm"}>{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>
          {/* right */}
          <Flex>
            <EditModal user={user} />
            <IconButton
              variant={"ghost"}
              colorScheme="red"
              size={"sm"}
              aria-label="See menu"
              icon={<BiTrash size={20} />}
            />
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{user.description}</Text>
      </CardBody>
    </Card>
  );
}

export default UserCard;
