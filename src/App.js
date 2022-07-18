import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import AddEditForm from "./pages/AddEditForm"
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/employee/list" />} />
        <Route path="/employee/list" element={<Home />} />
        <Route path="/employee/add" element={<AddEditForm />} />
        <Route path="/employee/edit/:id" element={<AddEditForm />} />
      </Routes>
    </div>
  );
}

export default App;
