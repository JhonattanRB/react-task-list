import { useState, useEffect } from "react";

export function useChecked() {
  const [checkedTasks, setCheckedTasks] = useState([]);

  function addCheckedTask(textask) {
    console.log(`favourite clicked from ${textask}`);

    let newcheckedTasks = [...checkedTasks];

    if (!checkedTasks.includes(textask)) {
      newcheckedTasks = [...newcheckedTasks, textask];
    } else {
      newcheckedTasks = newcheckedTasks.filter((task) => textask != task);
    }

    setCheckedTasks(newcheckedTasks);
    localStorage.setItem("checkedTasks", JSON.stringify(newcheckedTasks));
  }

  useEffect(() => {
    const localStorageData = localStorage.getItem("checkedTasks");
    if (localStorageData) {
      try {
        const storedcheckedTasks = JSON.parse(localStorageData);
        setCheckedTasks(storedcheckedTasks);
      } catch {
        console.log("Error parsing checked task from localStorage");
      }
    }
  }, []);

  return [checkedTasks, addCheckedTask];
}
