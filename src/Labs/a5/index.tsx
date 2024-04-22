import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
function Assignment5() {
    const API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000"
    return (
        <div>
            <h1>
                Assignment5
            </h1>
            <a href={"http://localhost:4000/a5/welcome" || `${process.env.REACT_APP_BASE_API_URL}/a5/welcome`}>
                Welcome
            </a>
            <EncodingParametersInURLs />
            <WorkingWithObjects />
            <WorkingWithArrays />
        </div>
    );
};
export default Assignment5;