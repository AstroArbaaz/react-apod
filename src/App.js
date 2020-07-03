import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route path='/' exact component={Home} />
        <Route path="/nasa_photo" component={NasaPhoto} />
      </div>
    </Router>
  );
}

export default App;
