import { Center } from "@chakra-ui/react";
import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

const arraylist = [
  { name: "Complete React ToDo App", completed: false },
  { name: "Do strenght work in the gym", completed: false },
  {
    name: "Read the book: The Subtle art of Not Giving a Fuck",
    completed: true,
  },
  {
    name: "Complete an inform about Cellular Signal in Medellin",
    completed: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList list={arraylist} />
    </div>
  );
}

export default App;
