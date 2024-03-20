import Javascript from "./Javascript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoList";
import Abc from "./test";
function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight>
      <Add a={3} b={4} />
      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <Javascript />
      <PathParameters />
      <Abc/>
      <br/> <br/> <br/> <br/>
    </div>
  );
}
export default Assignment3;