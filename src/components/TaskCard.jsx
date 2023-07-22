import { useState } from "react";
import {
  Checkbox,
  Text,
  Button,
  ButtonGroup,
  Flex,
  Box,
  Input,
} from "@chakra-ui/react";

export const TaskCard = (props) => {
  const { task, onDeleteTask, onCheckTask, onEditTask } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(task.task);

  const handleCheckboxClick = () => {
    console.log("Task " + task.task + " checked");
    onCheckTask(task.id);
  };

  const handleDeleteTask = () => {
    console.log("Task " + task.task + " deleted");
    onDeleteTask(task.id);
  };

  const handleEditTask = () => {
    if (isEditing) {
      onEditTask(task.id, editInput);
      console.log("Task " + task.task + " edited");
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event) => {
    setEditInput(event.target.value);
  };

  return (
    <div>
      <Flex alignItems="center" gap="2">
        <Box>
          {/* Toggle between a Checkbox and an Input depending on isEditing */}
          {isEditing ? (
            <Input type="text" value={editInput} onChange={handleInputChange} />
          ) : (
            <Checkbox
              type="checkbox"
              isChecked={task.checked}
              onChange={handleCheckboxClick}
              borderColor="gray.500" // added border color
            >
              <Text
                style={{
                  textDecoration: task.checked ? "line-through" : "none",
                }}
              >
                {task.task}
              </Text>
            </Checkbox>
          )}
        </Box>
        <ButtonGroup spacing="2" p={1}>
          <Button onClick={handleEditTask} h="2rem" shadow="md">
            {isEditing ? "Save" : "Edit"}
          </Button>
          <Button onClick={handleDeleteTask} h="2rem" shadow="md">
            Delete
          </Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};
