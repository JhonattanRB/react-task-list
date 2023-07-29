import { Flex, Box, VStack } from "@chakra-ui/react";
import { TaskCard } from "./TaskCard";

export const TaskList = (props) => {
  const { tasks, onCheckTask, onDeleteTask, onEditTask } = props;

  return (
    <VStack spacing={4} align="stretch">
      {tasks.map((task) => (
        <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          key={task.id}
          backgroundColor="gray.100"
        >
          <TaskCard
            task={task}
            onDeleteTask={onDeleteTask}
            onCheckTask={onCheckTask}
            onEditTask={onEditTask}
          />
        </Box>
      ))}
    </VStack>
  );
};
