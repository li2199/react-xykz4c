import './App.css';
import React from 'react';
import Top from './Top';
import Log from './Logbox';
const App = () => (
  <div className="App">
    <Top />
    <Log />
    <div className="left" />
    <div className="center" />
    <div className="bottom" />
  </div>
);

export default App;
