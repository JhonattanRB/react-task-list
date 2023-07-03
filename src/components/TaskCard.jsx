import {
  Checkbox,
  Text,
  Button,
  ButtonGroup,
  Flex,
  Box,
} from "@chakra-ui/react";

export const TaskCard = (props) => {
  const { textask, onDeleteTask, onCheckedTask, isCheckedTask } = props;

  /*const [isChecked, setIsChecked] =
    useState(false); hook to keep track of the checkbox's checked state*/

  const handleCheckboxClick = () => {
    //setIsChecked(!isChecked);
    console.log("Task " + textask + " checked");
    onCheckedTask(textask);
  }; /*use handle name like a prefix in fuctions that responses an event*/

  const handleEditTask = () => {
    console.log("Task " + textask + " edited");
    //onEditTask(textask);
  };

  const handleDeleteTask = () => {
    console.log("Task " + textask + " deleted");
    onDeleteTask(textask);
  };

  return (
    <div>
      <Flex alignItems="center" gap="2">
        <Box>
          <Checkbox
            type="checkbox"
            isChecked={isCheckedTask}
            onChange={handleCheckboxClick}
          >
            <Text
              style={{
                textDecoration: isCheckedTask ? "line-through" : "none",
              }}
            >
              {textask}{" "}
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
