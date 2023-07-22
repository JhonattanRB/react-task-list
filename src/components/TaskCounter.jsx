import { Box } from "@chakra-ui/react";

export const TaskCounter = ({ tasks }) => {
  const checkedTasksCount = tasks.filter((task) => task.checked).length;

  return (
    <Box color="teal" pt={9} pl="45rem" pr="16rem">
      You have completed <strong>{checkedTasksCount}</strong> of{" "}
      <strong>{tasks.length}</strong> tasks.
    </Box>
  );
};
