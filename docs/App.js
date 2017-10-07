import React from "react";
import Attina from "../attina";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Attina name="diagram" style={{ width: 500, height: 500 }}>
          graph TD; A-->B; A-->C; B-->D; C-->D;
        </Attina>
      </div>
    );
  }
}

export default App;
