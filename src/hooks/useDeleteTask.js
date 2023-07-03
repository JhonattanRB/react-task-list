import { useState } from "react";

export function useDeleteTask(arraylist) {
  const [tasks, setTasks] = useState(arraylist);

  function deleteTask(textask) {
    const updatedTasks = tasks.filter((task) => task.textask !== textask);
    setTasks(updatedTasks);
  }

  return [tasks, deleteTask];
}
