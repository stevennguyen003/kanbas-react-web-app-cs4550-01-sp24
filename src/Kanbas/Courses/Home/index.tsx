import ModuleList from "../Modules/List";
import { FaFileExport, FaPlusCircle, FaHouseUser, FaChartBar, FaMicrophone, FaBell } from "react-icons/fa";
import "./index.css";

function Home() {
    return (
        <div className="wd-course-home-body wd-flex-row-container">
            <div className="wd-course-module-list">
                <ModuleList />
            </div>
            <div className="d-none d-xxl-block wd-course-status-bar">
                <button><FaFileExport/> Import Existing Content</button>
                <button><FaPlusCircle/> Import From Commons</button>
                <button><FaHouseUser/> Choose Home Page</button>
                <button><FaChartBar/> View Course Stream</button>
                <button><FaMicrophone/> New Announcement</button>
                <button><FaChartBar/> New Analytics</button>
                <button><FaBell/> View Course Notifications</button>
            </div>
        </div>
    );
}
export default Home;