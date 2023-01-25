import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import { Routes, Route } from 'react-router-dom';
// import { Home } from './pages/Home';
// import { About } from './pages/About';
// import { Members } from './pages/Members';
import { Projects } from './pages/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Members /> */}
      <Projects />
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes> */}
      <Footer />
    </div>

  );
}

export default App;
