import { Component } from "react";
import "./App.css";
import ReactLifeCycleMethods from './Component/ReactLifeCycleMethods/ReactLifeCycleMethods'


class App extends Component {
  render() {
    return (
        <div className="App">
            <ReactLifeCycleMethods />
        </div>
    );
  }
}

export default App;
