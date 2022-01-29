import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Create from "./createEndpoint/create";
import View from "./viewEndpoints/view";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/create" exact element={<Create />} />
        <Route path="/view" exact element={<View />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
