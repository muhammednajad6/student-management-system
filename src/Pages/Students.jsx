import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);

  const API =
    "https://student-management-system-hbvp.onrender.com/students";

  const getStudents = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setStudents(data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  const deleteStudent = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });

    getStudents();
  };

  return (
    <div className="page">

      <div className="page-heading">

        <div>
          <p className="small-title">
            STUDENT RECORDS
          </p>

          <h1>Students</h1>
        </div>

        <Link to="/add" className="main-btn">
          + Add Student
        </Link>

      </div>

      {students.length === 0 ? (

        <div className="empty">
          <div className="empty-icon">
            👥
          </div>

          <h2>No students found</h2>

          <p>
            Add your first student to get started.
          </p>
        </div>

      ) : (

        <div className="student-list">

          {students.map((student) => (

            <div
              className="student-card"
              key={student.id}
            >

              <div className="student-icon">
                👤
              </div>

              <div className="student-info">

                <h2>{student.name}</h2>

                <p>{student.email}</p>

                <span>
                  {student.course}
                </span>

              </div>

              <div className="buttons">

                <Link
                  to={`/students/${student.id}`}
                  className="view-btn"
                >
                  View
                </Link>

                <Link
                  to={`/edit/${student.id}`}
                  className="edit-btn"
                >
                  Edit
                </Link>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteStudent(student.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Students;