import "./App.css";
import { Header } from "./components/Header";
import { TaskCounter } from "./components/TaskCounter";
import { TaskList } from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const { tasks, addTask, deleteTask, checkTask, editTask, dataLoaded } =
    useTasks();

  const handleAddTask = (newTask) => {
    const task = {
      id: uuidv4(),
      task: newTask,
      checked: false,
    };
    addTask(task);
  };

  if (!dataLoaded) {
    return <div>Loading...</div>; // O alguna otra cosa que indique que los datos se están cargando
  }

  return (
    <div className="App">
      <Header onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onCheckTask={checkTask}
        onDeleteTask={deleteTask}
        onEditTask={editTask}
      />
      <TaskCounter tasks={tasks} />
    </div>
  );
}

export default App;
