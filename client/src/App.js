import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <Layout />
      </div>
    </Router>
  );
}

export default App;
