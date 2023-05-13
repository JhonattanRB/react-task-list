import { Flex, Box } from "@chakra-ui/react";
import { TaskCard } from "./TaskCard";

export const TaskList = (props) => {
  const { list } = props;

  const handleCheckEdit = (editName) => {
    console.log(`task edited from ${editName}`);
  };

  const handleCheckDelete = (delName) => {
    console.log(`task deleted from ${delName}`);
  };

  return (
    <Flex align="center" justify="center" direction="column">
      <Box pt={5} pl="28rem" pr="15rem">
        <ul>
          {list.map((task) => (
            <TaskCard
              name={task.name}
              completed={task.completed}
              onCheckEdittask={handleCheckEdit}
              onCheckDeletetask={handleCheckDelete}
            />
          ))}
        </ul>
      </Box>
    </Flex>
  );
};
