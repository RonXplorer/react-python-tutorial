import { Box, Container, Flex, Icon, Text, Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { LuSun } from "react-icons/lu"
import { IoMoon } from "react-icons/io5"
import CreateUserModal from "./CreateUserModal"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return <Container maxW={"900px"}>
    <Box
      px={4}  
      my={4}
      borderRadius={5}
      bg={useColorModeValue("gray.200", "gray.700")}
    >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
            {/* Left side */}
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              gap={3}
              display={{base:"none", sm:"flex"}}
            >
              <img src="/react.png" alt="React logo" width={50} height={50}/>
              <Text fontSize={"40px"}>+</Text>
              <img src="/python.png" alt="Python logo" width={50} height={50}/>
              <Text fontSize={"40px"}>=</Text>
              <img src="/explode.png" alt="Explode logo" width={45} height={45}/>
            </Flex>
            {/* Right side */}
            <Flex
              gap={3}
              alignItems={"center"}
            >
              <Text fontSize={"lg"} fontWeight={500} display={{base: "none", md: "block"}}>BFFship 🔥</Text>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
              </Button>
              <CreateUserModal />
            </Flex>
        </Flex>
    </Box>
  </Container>
}
export default Navbar;