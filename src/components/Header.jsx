import { Heading, Input, Button, Flex, Box, HStack } from "@chakra-ui/react";
import { useState } from "react";

export const Header = (props) => {
  const [taskInput, setTaskInput] = useState(""); // Estado para almacenar el valor del input
  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      props.onAddTask(taskInput); // Llamar a la función onAddTask pasando el valor del input
      setTaskInput(""); // Limpiar el valor del input después de agregar la tarea
    }
  };

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
              value={taskInput} // Asignar el valor del input al estado taskInput
              onChange={handleInputChange} // Asignar la función handleInputChange al evento onChange del input
            />
          </Box>
          <Box p={1}>
            <Button colorScheme="teal" h="2rem" onClick={handleAddTask}>
              Add
            </Button>
          </Box>
        </HStack>
      </Flex>
    </div>
  );
};
