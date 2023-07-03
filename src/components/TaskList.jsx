import { Flex, Box } from "@chakra-ui/react";
import { TaskCard } from "./TaskCard";

export const TaskList = (props) => {
  const { list, onCheckedTask, onDeleteTask, checkedTasks } = props;

  /*const handleEditTask = (textask) => {
    console.log(`task: ${textask} edited from children `);
    onEditTask(textask);
  };*/

  return (
    <Flex align="center" justify="center" direction="column">
      <Box pt={5} pl="25rem" pr="15rem">
        <ul>
          {list.map((task) => (
            <TaskCard
              key={task.textask}
              textask={task.textask}
              //onEditTask={handleEditTask}
              onDeleteTask={onDeleteTask}
              onCheckedTask={onCheckedTask}
              isCheckedTask={checkedTasks.includes(task.textask)}
            />
          ))}
        </ul>
      </Box>
    </Flex>
  );
};
