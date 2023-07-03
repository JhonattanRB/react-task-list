import "./App.css";
import { Header } from "./components/Header";
import { TaskCounter } from "./components/TaskCounter";
import { TaskList } from "./components/TaskList";
import { useChecked } from "./hooks/useChecked";
import { useDeleteTask } from "./hooks/useDeleteTask";
import { useAddTask } from "./hooks/useAddTask";

const arraylist = [
  { textask: "Complete React ToDo App" },
  { textask: "Do strenght work in the gym" },
  { textask: "Read the book: The Subtle art of Not Giving a Fuck" },
  { textask: "Complete an inform about Cellular Signal in Medellin" },
];

function App() {
  const [checkedTasks, addCheckedTask] = useChecked();
  const [tasks, deleteTask] = useDeleteTask(arraylist);
  const [newTasks, addTask] = useAddTask();
  const totalTasks = tasks.length;

  const handleAddTask = (newTask) => {
    addTask({ textask: newTask });
  };

  return (
    <div className="App">
      <Header
        onAddTask={handleAddTask} //// Pasar la función handleAddTask al componente Header
      />
      <TaskList
        list={[...tasks, ...newTasks]} // Combine the current tasks with the new tasks
        onCheckedTask={addCheckedTask}
        onDeleteTask={deleteTask}
        checkedTasks={checkedTasks}
      />
      <TaskCounter checkedTasks={checkedTasks} totalTasks={totalTasks} />
    </div>
  );
}

export default App;
