import {
  Heading,
  Input,
  Button,
  Flex,
  Box,
  HStack,
  FormControl,
  FormErrorMessage,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

export const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskInput, setTaskInput] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
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

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setTaskDescription(value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      props.onAddTask(taskInput, taskDescription);
      setTaskInput("");
      setTaskDescription("");
      onClose();
    }
  };

  const isFormValid = formValidation.taskInput === "";

  return (
    <div>
      <Flex align="center" direction="column">
        <Box>
          <Heading as="h2" p={5}>
            ToDo App
          </Heading>
        </Box>
        <HStack p={3}>
          <Box>
            <Button colorScheme="teal" h="2rem" onClick={onOpen}>
              Add New Task
            </Button>
          </Box>
        </HStack>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a new task</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isInvalid={!!formValidation.taskInput}>
                <Input
                  placeholder="Add a task"
                  value={taskInput}
                  onChange={handleInputChange}
                />
                <FormErrorMessage>{formValidation.taskInput}</FormErrorMessage>
                <Textarea
                  mt={4}
                  placeholder="Add a description (optional)"
                  value={taskDescription}
                  onChange={handleDescriptionChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleAddTask}
                disabled={!isFormValid}
              >
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </div>
  );
};
