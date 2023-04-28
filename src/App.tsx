
import * as React from 'react'
import { HashRouter as Router, Route, Link, Routes  } from 'react-router-dom';
import './App.css';
import { render } from 'react-dom';
import User from './User';
function App() {
  return (
    <Router>
    <div>
    
      <Routes >
        <Route  path="/" Component={User} />
      </Routes >
    </div>
  </Router>
  );
}

export default App;
