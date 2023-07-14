//hook unificado
import { useState, useEffect } from "react";

export function useTasks() {
  const initialTasks = () => {
    const data = localStorage.getItem("tasks");
    if (data) {
      try {
        return JSON.parse(data);
      } catch (err) {
        console.err("Error parsing tasks items from localStorage");
      }
    }
    return [];
  };

  const [tasks, setTasks] = useState(initialTasks);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    setDataLoaded(true); // Datos cargados
  }, []);

  function addTask(newTask) {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  function deleteTask(taskId) {
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== taskId));
  }

  function checkTask(taskId) {
    setTasks((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  }

  function editTask(taskId, newTask) {
    setTasks((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId ? { ...task, task: newTask } : task
      )
    );
  }

  return { tasks, addTask, deleteTask, checkTask, editTask, dataLoaded };
}
