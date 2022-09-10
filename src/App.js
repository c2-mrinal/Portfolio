import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Main/Navbar';
import Loader from './Shared/Loader';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';



const Intro = lazy(() => import("./Components/Intro"));
const Timeline = lazy(() => import("./Components/Timeline"))
const Contact = lazy(() => import("./Components/Contact"))
const Skills = lazy(() => import("./Components/Skill"))
const About = lazy(() => import("./Components/About"))




function App() {

  return (
    <div className="App">
     <BrowserRouter>
          <Header/>
          <Suspense  fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/career" element={<Timeline />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skills  height={745} width={1440}/>} />
        </Routes>
        </Suspense> 
      </BrowserRouter>
    </div>
  );
}

export default App;
