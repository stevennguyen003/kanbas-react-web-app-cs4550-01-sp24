import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const API = process.env.REACT_APP_BASE_API_URL;
  const ASSIGNMENT_URL = `${API}/a5/assignment`;
  const MODULE_URL = `${API}/a5/modules`;
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
        ...assignment, title: e.target.value
      })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>
      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input type="text"
        onChange={(e) => setAssignment({
          ...assignment,
          title: e.target.value
        })}
        value={assignment.title} />
      <h4>Retrieving Objects</h4>
      <a href={`${ASSIGNMENT_URL}`}>
        Get Assignment
      </a> <br />
      <a href={`${ASSIGNMENT_URL}/a5/module`}>
        Get Module
      </a>
      <h4>Retrieving Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title`}>
        Get Title </a> <br />
      <a href={`${MODULE_URL}/name`}>
        Get Module Title
      </a>
    </div>
  );
}
export default WorkingWithObjects;