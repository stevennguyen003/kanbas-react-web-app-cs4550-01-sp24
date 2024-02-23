import { FaEllipsisV } from "react-icons/fa";
import "./index.css";
function ModuleHeaderButtons() {
    return (
        <div className="wd-modules-heading-buttons">
        <button>Collapse All</button>
        <button>View Progress</button>
        <button>Publish All</button>
        <button id="add-button">+ Module</button>
        <button><FaEllipsisV/></button>
        <hr></hr>
    </div>
    );
}
export default ModuleHeaderButtons;