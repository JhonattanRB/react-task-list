import { Box } from "@chakra-ui/react";

export const TaskCounter = (props) => {
  const { checkedTasks, totalTasks } = props;

  /*const remainingTasks = tasks.filter(
    (task) => !checkedTasks.includes(task.textask)
  );*/

  return (
    <Box
      checkedtask={checkedTasks.length}
      color="teal"
      pt={9}
      pl="45rem"
      pr="16rem"
    >
      Number of Completed Tasks: {checkedTasks.length} of {totalTasks}
    </Box>
  );
};
