import { Routes, Route} from "react-router-dom";
import Nav from "../Nav";
import Assignment3 from "./a3";
function Labs() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/a3/*" element={<Assignment3 />} />
      </Routes>
    </div>
  );
}
export default Labs;
