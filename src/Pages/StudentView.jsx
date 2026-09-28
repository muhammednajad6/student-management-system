import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function StudentView() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);

  const API = "https://student-management-system-hbvp.onrender.com/students";

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((response) => response.json())
      .then((data) => setStudent(data));
  }, [id]);

  if (!student) {
    return (
      <div className="page">
        <div className="empty">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="page">

      <div className="view-box">

        <div className="profile-icon">
          👤
        </div>

        <p className="small-title">
          STUDENT PROFILE
        </p>

        <h1>{student.name}</h1>

        <p className="view-subtitle">
          Student Details
        </p>

        <div className="detail">

          <strong>Name</strong>

          <span>
            {student.name}
          </span>

        </div>

        <div className="detail">

          <strong>Email</strong>

          <span>
            {student.email}
          </span>

        </div>

        <div className="detail">

          <strong>Course</strong>

          <span>
            {student.course}
          </span>

        </div>

        <div className="view-actions">

          <Link
            to={`/edit/${student.id}`}
            className="edit-btn"
          >
            Edit Student
          </Link>

          <Link
            to="/students"
            className="back-btn"
          >
            Back to Students
          </Link>

        </div>

      </div>

    </div>
  );
}

export default StudentView;