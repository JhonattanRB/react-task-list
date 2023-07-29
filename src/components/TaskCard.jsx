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
  const [editDescription, setEditDescription] = useState(task.description);

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
      onEditTask(task.id, editInput, editDescription);
      console.log("Task " + task.task + " edited");
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event) => {
    setEditInput(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setEditDescription(event.target.value);
  };

  return (
    <div>
      <Flex alignItems="center" gap="2">
        <Box w="300px" h="75px" overflow="auto">
          {isEditing ? (
            <>
              <Input
                type="text"
                value={editInput}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                value={editDescription}
                onChange={handleDescriptionChange}
              />
            </>
          ) : (
            <Checkbox
              type="checkbox"
              isChecked={task.checked}
              onChange={handleCheckboxClick}
              borderColor="gray.500"
            >
              <Box
                style={{
                  textDecoration: task.checked ? "line-through" : "none",
                }}
              >
                <Text>{task.task}</Text>
                <Text>{task.description}</Text>
              </Box>
            </Checkbox>
          )}
        </Box>
        <ButtonGroup spacing="2" p={1}>
          {!task.checked && (
            <Button
              onClick={handleEditTask}
              h="2rem"
              shadow="md"
              boxShadow="1px 2px 1px #008080"
            >
              {isEditing ? "Save" : "Edit"}
            </Button>
          )}
          <Button
            onClick={handleDeleteTask}
            h="2rem"
            shadow="md"
            boxShadow="1px 2px 1px #008080"
          >
            Delete
          </Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};
