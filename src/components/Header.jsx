import { Heading, Input, Button, Flex, Box, HStack } from "@chakra-ui/react";

export const Header = () => {
  return (
    <div>
      <Flex align="center" justify="center" direction="column">
        <Box>
          <Heading as="h2" pl="25rem" pt="10rem" pr="15rem">
            ToDo App
          </Heading>
        </Box>
        <HStack pt={5} pl="25rem" pr="15rem">
          <Box>
            <Input
              type="text"
              h="2rem"
              width="25rem"
              bgColor="white"
              border="1.5px solid gray"
              focusBorderColor="blue.400"
              placeholder="Add a task"
            />
          </Box>
          <Box p={1}>
            <Button colorScheme="teal" h="2rem">
              Add
            </Button>
          </Box>
        </HStack>
      </Flex>
    </div>
  );
};
