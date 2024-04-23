import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
function Assignment5() {
    return (
        <div>
            <h1>
                Assignment5
            </h1>
            <a href={`${process.env.REACT_APP_BASE_API_URL}/a5/welcome`}>
                Welcome
            </a>
            <EncodingParametersInURLs />
            <WorkingWithObjects />
            <WorkingWithArrays />
        </div>
    );
};
export default Assignment5;