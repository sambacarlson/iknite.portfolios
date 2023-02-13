import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { About } from './pages/About';
import Home from './pages/Home';
import MemberProfile from './pages/MemberProfile';
import { Members } from './pages/Members';
import ProjectProfile from './pages/ProjectProfile';
import { Projects } from './pages/Projects';

import { PORTFORLIO } from './data';

console.log(PORTFORLIO)


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/about' element={<About />}/> */}
        <Route path='/projects' element={<Projects />}/>
        <Route path='/members' element={<Members />}/>
        <Route path='/memberProfile' element={<MemberProfile />}/>
        <Route path='/projectProfile' element={<ProjectProfile />}/>
        <Route path='*' element={<Home />}/>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
