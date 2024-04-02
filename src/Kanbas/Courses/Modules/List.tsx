import { Lesson } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import "./index.css";
import { useParams } from "react-router";
import ModuleHeaderButtons from "./ModuleHeaderButtons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./reducer";
import * as client from "./client";
import { KanbasState } from "../../store";
import { findModulesForCourse, createModule } from "./client";
function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    const handleDeleteModule = (moduleId: string) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };
    const dispatch = useDispatch();
    return (
        <>
            <ModuleHeaderButtons />
            <div className="module-modify-form">
                <h5>Module</h5>
                <input
                    value={module.name}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, name: e.target.value }))
                    } />
                <textarea
                    value={module.description}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, description: e.target.value }))
                    } />
                <br />
                <button className="btn btn-primary"
                    onClick={handleAddModule}>
                    Add
                </button>
                <button className="btn btn-success"
                    onClick={handleUpdateModule}>
                    Update
                </button>
            </div>
            <ul className="list-group wd-modules wd-flex-grow-1">
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item">
                            <div className="list-group-item-heading">
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <button
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteModule(module._id)}>
                                        Delete
                                    </button>
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            {
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: Lesson, index: number) => (
                                        <li className={index === 0 ? "first-item list-group-item" : "list-group-item"} key={index}>
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                            <br />
                                            {lesson.description}
                                        </li>
                                    ))}
                                </ul>
                            }
                        </li>
                    ))}
            </ul >
        </>
    );
}
export default ModuleList;