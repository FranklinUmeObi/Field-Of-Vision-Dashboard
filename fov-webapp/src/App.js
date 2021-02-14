import "./App.css";

import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <h1>Our WebApp Works</h1>
        </Route>
        <Route exact path="/test">
          <h1>Router Works</h1>
        </Route>
      </div>
    </Router>
  );
}

export default App;
