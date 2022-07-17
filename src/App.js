import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import AddEditForm from "./Pages/AddEditForm"
import Home from "./Pages/Home";

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
