import "./App.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

const arraylist = [
  { textask: "Complete React ToDo App" },
  { textask: "Do strenght work in the gym" },
  { textask: "Read the book: The Subtle art of Not Giving a Fuck" },
  { textask: "Complete an inform about Cellular Signal in Medellin" },
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
