import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AddStudent from "./Pages/AddStudent";
import Students from "./Pages/Students";
import EditStudent from "./Pages/EditStudent";
import StudentView from "./Pages/StudentView";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <nav className="navbar">
          <h2>🎓 Student Management</h2>

          <div className="nav-links">
            <Link to="/">Dashboard</Link>
            <Link to="/add">Add Student</Link>
            <Link to="/students">Students</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentView />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;