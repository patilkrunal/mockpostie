import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import Create from './createEndpoint/create'
import View from './viewEndpoints/view';
import Login from './loginEndpoint/login';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<App/>}/>
        <Route path="/create" exact element={<Create/>}/>
        <Route path="/view" exact element={<View/>}/>
        <Route path="/login" exact element={<Login/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
