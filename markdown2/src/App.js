import React from "react";
import marked from "marked";
import { renderer } from "marked";
import Prism from "prism";
import "./style.css";

const projectName = "markdown-previewer";

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },
});

// INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: placeholder,
    };
  }

  onPreview(e) {
    this.setState({
      markdown: e.target.value,
    });
  }

  render() {
    return (
      <div className="allContainer">
        <div className="center">
          <h1>Markdown Previewer</h1>
        </div>

        <div className="LEFT">
          <h4>Markdown Input</h4>
          <textarea
            id="editor"
            onChange={this.state.markdown}
            type="text"
            value={this.state.markdown}
            cols={50}
            rows={50}
          />
        </div>

        <div className="RIGHT">
          <h4>Preview</h4>
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}

const Preview = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer }),
      }}
      id="preview"
    />
  );
};

export default App;
