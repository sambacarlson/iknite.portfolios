import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl">Hello world!</h1>
      <Routes>
        <Route path='/' element={''}/> 
      </Routes>
    </div>

  );
}

export default App;
