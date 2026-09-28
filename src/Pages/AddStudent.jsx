import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const navigate = useNavigate();

  const API = "http://localhost:3000/students";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !course) {
      alert("Please fill all fields");
      return;
    }

    const student = {
      name,
      email,
      course,
    };

    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    navigate("/students");
  };

  return (
    <div className="page">

      <div className="form-box">

        <div className="form-icon">
          
        </div>

        <h1>Add Student</h1>

        <p className="form-subtitle">
          Enter the student details below.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Student Name</label>

          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter student email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Course</label>

          <input
            type="text"
            placeholder="Enter course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <button
            className="main-btn full-btn"
            type="submit"
          >
            Add Student
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddStudent;