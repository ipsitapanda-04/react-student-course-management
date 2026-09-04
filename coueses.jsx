import { Link } from "react-router-dom";

function Courses() {
  return (
    <div>
      <h1>Courses</h1>

      <ul>
        <li>
          <Link to="/course/101">React JS</Link>
        </li>

        <li>
          <Link to="/course/102">Data Science</Link>
        </li>
      </ul>
    </div>
  );
}

export default Courses;
