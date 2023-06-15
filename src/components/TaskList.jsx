import { Flex, Box } from "@chakra-ui/react";
import { TaskCard } from "./TaskCard";
import { useState, useEffect } from "react";

export const TaskList = (props) => {
  const { list } = props;
  const [checkedTask, setCheckedTask] = useState([]);

  const handleEditTask = (textask) => {
    /*editText is a parameter function = textask from chlidren (TaskCard)*/
    console.log(`task: ${textask} edited from children `);
  };

  const handleDeleteTask = (textask) => {
    console.log(`task: ${textask}, deleted from children`);
  };

  const handleCheckedTask = (textask) => {
    console.log(`task: ${textask}, checked from children`);

    let newcheckedTask = [...checkedTask]; //new variable because checkedTask in use state is ONLY read mode

    if (!checkedTask.includes(textask)) {
      newcheckedTask = [...newcheckedTask, textask];
    } else {
      newcheckedTask = newcheckedTask.filter((task) => textask != task);
    }

    setCheckedTask(newcheckedTask);

    localStorage.setItem("checkedTask", JSON.stringify(newcheckedTask));
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("checkedTask");
    if (localStorageData) {
      try {
        const storedcheckedTask = JSON.parse(localStorageData);

        setCheckedTask(storedcheckedTask);
      } catch {
        console.log("Error parsing checked task from localStorage");
      }
    }
  }, []);

  return (
    <Flex align="center" justify="center" direction="column">
      <Box pt={5} pl="28rem" pr="15rem">
        <ul>
          {list.map((task) => (
            <TaskCard
              key={task.textask}
              textask={task.textask}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
              onCheckedTask={handleCheckedTask}
              isCheckedTask={checkedTask.includes(task.textask)}
            />
          ))}
        </ul>
      </Box>
    </Flex>
  );
};
