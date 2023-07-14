import {
  Heading,
  Input,
  Button,
  Flex,
  Box,
  HStack,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";

export const Header = (props) => {
  const [taskInput, setTaskInput] = useState("");
  const [formValidation, setFormValidation] = useState({
    taskInput: undefined,
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    setTaskInput(value);

    setFormValidation({
      ...formValidation,
      taskInput: value.length < 3 ? "task must be above 3 characters" : "",
    });
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      props.onAddTask(taskInput);
      setTaskInput("");
    }
  };

  const isFormValid = formValidation.taskInput === "";

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
            <FormControl isInvalid={!!formValidation.taskInput}>
              <Input
                type="text"
                h="2rem"
                width="25rem"
                bgColor="white"
                border="1.5px solid gray"
                focusBorderColor="blue.400"
                placeholder="Add a task"
                value={taskInput}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{formValidation.taskInput}</FormErrorMessage>
            </FormControl>
          </Box>
          <Box p={1}>
            <Button
              colorScheme="teal"
              h="2rem"
              onClick={handleAddTask}
              disabled={!isFormValid}
            >
              Add
            </Button>
          </Box>
        </HStack>
      </Flex>
    </div>
  );
};
