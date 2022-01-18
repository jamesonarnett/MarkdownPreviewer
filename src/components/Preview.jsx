import React from "react";

const Preview = (props) => {
  return (
    <div className="previewContainer">
      <h2>Preview</h2>
      <textarea
        cols={100}
        rows={40}
        id="preview"
        value={props.markdown}
        readOnly
      ></textarea>
    </div>
  );
};

export default Preview;
