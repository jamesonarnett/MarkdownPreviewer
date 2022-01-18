import React, { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Placeholder from "./components/Placeholder";
import "./style.css";

const App = (props) => {
  const [mark, setMark] = useState(Placeholder);

  const handleChange = (e) => {
    setMark(e.target.value);
  };

  return (
    <div className="Jall">
      <Editor onChange={handleChange}>{Placeholder}</Editor>
      <Preview markdown={mark} />
    </div>
  );
};

export default App;
