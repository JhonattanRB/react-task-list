import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export function HomePage() {
  return (
    <Box
      backgroundColor="gray.100" // light gray background color
      h="100vh"
    >
      <Flex p={5} position="absolute" right={10}>
        <Spacer />
        <Button as={RouterLink} to="/task-app" colorScheme="teal" mr={2}>
          Task App
        </Button>
        <Spacer />
        <Button as={RouterLink} to="/contact-us" colorScheme="teal">
          Contact Us
        </Button>
      </Flex>

      <Flex direction="column" h="100vh" pl={5} pr={5}>
        <Heading
          as="h1"
          size="lg"
          color="gray.600"
          mt={15}
          pt={105}
          textAlign="center"
        >
          Welcome to the best ToDo List App
        </Heading>
        <Box flex="1" pt={105}>
          <VStack spacing={25} align="center">
            <Heading
              as="h2"
              size="2xl"
              color="black"
              textAlign="center"
              pl={40}
              pr={40}
            >
              Keep track of your work, your defects, your chores... your life,
              all in one place!
            </Heading>
            <Text
              fontSize="xl"
              color="black"
              textAlign="center"
              letterSpacing="wider"
              pl={40}
              pr={40}
            >
              Add, edit, delete all the tasks you need or keep track of the ones
              you have completed.
            </Text>
            <Spacer />
            <Button as={RouterLink} to="/task-app" colorScheme="teal">
              Try it free
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}
