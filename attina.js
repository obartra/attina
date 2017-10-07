import React from "react";
import { mermaidAPI } from "mermaid";

function getDiagram(title, children, callback) {
  mermaidAPI.render(title, children.toString(), diagram => {
    callback({ diagram });
  });
}

export default class Attina extends React.Component {
  state = {
    diagram: "Loading..."
  };

  static defaultProps = {
    title: "diagram",
    frameBorder: 0
  };

  componentWillMount() {
    getDiagram(this.props.title, this.props.children, state =>
      this.setState(state)
    );
  }

  componentWillReceiveProps({ children }) {
    getDiagram(this.props.title, children, state => this.setState(state));
  }

  render() {
    const { childrnen, ...props } = this.props;
    const template = `
    <html>
      <body>
        <style>
          body {
            margin: 0;
            padding: 0;
          }
        </style>
        ${this.state.diagram}
      </body>
    </html>
    `;
    return (
      <iframe {...props} src={`data:text/html;charset=utf-8,${template}`} />
    );
  }
}
