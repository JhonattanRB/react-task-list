import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactUsPage } from "../pages/ContactUsPage";
import { TaskAppPage } from "../pages/TaskAppPage";
import { HomePage } from "../pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/task-app" element={<TaskAppPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
