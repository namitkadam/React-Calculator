import "./App.css";
import { useState } from "react";

import Button from "../src/Component/Button/Button.jsx";
import Input from "../src/Component/Input/Input.jsx";

function App() {
  const [value, setValue] = useState("");
  const addVal = (val) => {
    setValue((value) => value + val);
  };

  const cal = () => {
    console.log(value);
    setValue(eval(value));
  };

  const restval = () => {
    setValue("");
  };
  return (
    <div className="cal-container">
      <div className="cal-wrapper">
        <Input value={value} />
        <div>
          <div className="flex">
            <Button val={7} handleClick={addVal} />
            <Button val={8} handleClick={addVal} />
            <Button val={9} handleClick={addVal} />
            <Button val={"/"} color={"#f2a33c"} handleClick={addVal} />
          </div>
          <div className="flex">
            <Button val={4} handleClick={addVal} />
            <Button val={5} handleClick={addVal} />
            <Button val={6} handleClick={addVal} />
            <Button val={"*"} color={"#f2a33c"} handleClick={addVal} />
          </div>
          <div className="flex">
            <Button val={1} handleClick={addVal} />
            <Button val={2} handleClick={addVal} />
            <Button val={3} handleClick={addVal} />
            <Button val={"+"} color={"#f2a33c"} handleClick={addVal} />
          </div>
          <div className="flex">
            <Button val={0} handleClick={addVal} />
            <Button val={"."} handleClick={addVal} color={"#f2a33c"} />
            <Button val={"="} color={"#f2a33c"} handleClick={cal} />
            <Button val={"-"} handleClick={addVal} color={"#f2a33c"} />
          </div>
          <Button val={"Clear"} color={"red"} handleClick={restval} />
        </div>
      </div>
    </div>
  );
}

export default App;
