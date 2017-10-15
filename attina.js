import React from "react";
import { mermaidAPI } from "mermaid";

function getDiagram(title, input, callback) {
  mermaidAPI.render(title, input, diagram => {
    callback({ diagram });
  });
}

class Attina extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      diagram: "Loading..."
    };
  }

  componentWillMount() {
    getDiagram(this.props.title, this.props.diagram, state =>
      this.setState(state)
    );
  }

  componentWillReceiveProps({ diagram }) {
    getDiagram(this.props.title, diagram, state => this.setState(state));
  }

  render() {
    const { style = "", ...props } = this.props;
    const template = `
    <html>
      <body>
        <style>
          body {
            margin: 0;
            padding: 0;
          }
          ${style}
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

Attina.defaultProps = {
  title: "diagram",
  frameBorder: 0
};

export default Attina;
