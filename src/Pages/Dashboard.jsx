import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [students, setStudents] = useState([]);

  const API = "http://localhost:3000/students";

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className="page">

      <div className="hero">

        <div>
          <p className="small-title">
            STUDENT MANAGEMENT SYSTEM
          </p>

          <h1>Manage Students Easily</h1>

          <p>
            A simple system to add, view, edit and delete
            student information.
          </p>

          <Link to="/add" className="main-btn">
            + Add Student
          </Link>
        </div>

        <div className="hero-icon">
          🎓
        </div>

      </div>

      <div className="dashboard-cards">

        <div className="info-card">
          <h2>Student Management</h2>

          <p>
            This project is created using React,
            JavaScript, JSON Server and Fetch API.
          </p>
        </div>

        {/* TOTAL STUDENTS BOX */}
        <Link to="/students" className="count-card">

          <h2>{students.length}</h2>

          <p>Total Students</p>

          <span>View Students →</span>

        </Link>

      </div>

    </div>
  );
}

export default Dashboard;