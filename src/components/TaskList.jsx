import { Flex, Box } from "@chakra-ui/react";
import { TaskCard } from "./TaskCard";

export const TaskList = (props) => {
  const { tasks, onCheckTask, onDeleteTask, onEditTask } = props;

  return (
    <Flex align="center" justify="center" direction="column">
      <Box pt={5} pl="25rem" pr="15rem">
        <ul>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onCheckTask={onCheckTask}
              onEditTask={onEditTask}
            />
          ))}
        </ul>
      </Box>
    </Flex>
  );
};
