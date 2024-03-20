import courseList from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
const db = { courses: courseList };
interface Lesson {
    _id: string;
    name: string;
    description: string;
    module: string;
}
export { db, modules, assignments, type Lesson };