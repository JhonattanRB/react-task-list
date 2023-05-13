import {
  Checkbox,
  Text,
  Button,
  ButtonGroup,
  Flex,
  Box,
  Center,
} from "@chakra-ui/react";

export const TaskCard = (props) => {
  const { name, completed, onCheckEdittask, onCheckDeletetask } = props;

  const handleEditTask = () => {
    console.log("Task " + name + " edited");
    onCheckEdittask(name);
  }; /*use handle name like a prefix in fuctions that responses an event*/

  const handleDeleteTask = () => {
    console.log("Task " + name + " deleted");
    onCheckDeletetask(name);
  };

  return (
    <div>
      <Flex alignItems="center" gap="2">
        <Box>
          <Checkbox type="checkbox" isChecked={completed}>
            <Text
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {name}{" "}
            </Text>
          </Checkbox>
        </Box>
        <ButtonGroup spacing="2" p={1}>
          <Button onClick={handleEditTask} size="2rem">
            Edit
          </Button>
          <Button onClick={handleDeleteTask} h="2rem">
            Delete
          </Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};
