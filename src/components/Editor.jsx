import React from "react";

const Editor = (props) => {
  return (
    <div className="editorContainer">
      <h1>Convert your Markdown!</h1>
      <textarea
        cols={60}
        rows={20}
        onChange={props.onChange}
        id="editor"
        type="text"
        value={props.markdown}
      />
    </div>
  );
};

export default Editor;
