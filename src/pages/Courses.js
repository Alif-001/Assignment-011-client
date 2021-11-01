import { Container, Row } from "react-bootstrap";
import Course from "../components/course/Course.js";
import useAuth from "./../hooks/useAuth.js";

const Courses = () => {
  const { courses, totalPage, currentPage, setCurrentPage } = useAuth();

  return (
    <div className="py-5 container">
      <div className="text-start ">
        <div>
          <h1> All Packages</h1>
          <hr className="text-danger" />
        </div>

        <div></div>
      </div>

      <Container>
        <div className="my-3 d-flex flex-wrap justify-content-between ">
          <Row>
            {courses.map((course) => (
              <Course key={course._id} course={course} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Courses;
