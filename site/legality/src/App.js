import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import './App.css';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
