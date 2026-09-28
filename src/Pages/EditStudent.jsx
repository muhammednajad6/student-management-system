import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const API = "http://localhost:3000/students";

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setCourse(data.course);
      });
  }, [id]);

  const handleUpdate = async (e) => {
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

    await fetch(`${API}/${id}`, {
      method: "PUT",
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
          ✏️
        </div>

        <h1>Edit Student</h1>

        <p className="form-subtitle">
          Update the student details below.
        </p>

        <form onSubmit={handleUpdate}>

          <label>Student Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>Course</label>

          <input
            type="text"
            value={course}
            onChange={(e) =>
              setCourse(e.target.value)
            }
          />

          <button
            className="main-btn full-btn"
            type="submit"
          >
            Update Student
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditStudent;