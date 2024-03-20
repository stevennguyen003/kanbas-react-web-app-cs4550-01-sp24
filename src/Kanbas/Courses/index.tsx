import { db } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";


function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            <div className="wd-course-header">
                <h1>
                    <HiMiniBars3 />
                    <span className="wd-course-header-text">{course?.name} &gt;
                        <Routes>
                            <Route path="Home" element=" Home" />
                            <Route path="Modules" element=" Modules" />
                            <Route path="Piazza" element=" Piazza" />
                            <Route path="Grades" element=" Grades" />
                            <Route path="Assignments" element=" Assignments" />
                        </Routes>
                    </span>
                </h1>
                <hr></hr>
            </div>
            <div className="wd-flex-row-container">
                <CourseNavigation />
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                    <Route path="Grades" element={<h1>Grades</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default Courses;