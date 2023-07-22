import React from "react";
import { Header } from "../src/components/Header";
import { TaskList } from "../src/components/TaskList";
import { TaskCounter } from "../src/components/TaskCounter";
import { useTasks } from "../src/hooks/useTasks";
import { v4 as uuidv4 } from "uuid";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Spacer, Button } from "@chakra-ui/react";

export function TaskAppPage() {
  const { tasks, addTask, deleteTask, checkTask, editTask, dataLoaded } =
    useTasks();

  const handleAddTask = (newTask) => {
    const task = {
      id: uuidv4(),
      task: newTask,
      checked: false,
    };
    addTask(task);
  };

  if (!dataLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Box
        backgroundColor="gray.10" // light gray background color
        h="100vh"
      >
        <Flex p={5} position="absolute" right={10}>
          <Spacer />
          <Button as={RouterLink} to="/" colorScheme="teal" mr={2}>
            Home
          </Button>
          <Spacer />
          <Button as={RouterLink} to="/contact-us" colorScheme="teal">
            Contact Us
          </Button>
        </Flex>
        <Header onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onCheckTask={checkTask}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />
        <TaskCounter tasks={tasks} />
      </Box>
    </div>
  );
}
