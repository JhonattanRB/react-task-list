import { useState } from "react";

export const useAddTask = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return [tasks, addTask];
};
