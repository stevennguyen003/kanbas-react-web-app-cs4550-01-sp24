import { FaEllipsisV } from "react-icons/fa";
import "./index.css";
function AssignmentHeaderButtons() {
    return (
        <div className="wd-assignments-header">
            <input placeholder="Search for Assignments" />
            <button><FaEllipsisV /></button>
            <button id="add-button">+ Assignment</button>
            <button id="add-button">+ Group</button>
            <hr></hr>
        </div>
    );
}
export default AssignmentHeaderButtons;