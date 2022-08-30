import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Main/Navbar';

const Intro = lazy(() => import("./Components/Intro"));
const Timeline = lazy(() => import("./Components/Timeline"))
const Contact = lazy(() => import("./Components/Contact"))
const Skills = lazy(() => import("./Components/Skill"))

const rawdata = [
  {
    "rad": 4.5,
    "type": "a",
    "name":  "Javascript"
  },
  {
    "rad": 4,
    "type": "a",
    "name":  "TypeScript"
  },
  {
    "rad": 4.5,
    "type": "a",
    "name":  "ReactJS"
  },
  {
    "rad": 5,
    "type": "a",
    "name":  "CSS"
  },
  {
    "rad": 5,
    "type": "a",
    "name":  "HTML"
  },
  {
    "rad": 4,
    "type": "c",
    "name":  "Jquery"
  },
  {
    "rad": 3,
    "type": "b",
    "name":  "NodeJs"
  },
  {
    "rad": 2.5,
    "type": "b",
    "name":  "ExpressJS"
  },
  {
    "rad": 3.5,
    "type": "b",
    "name":  "VueJS"
  },
  {
    "rad": 3.5,
    "type": "b",
    "name":  "C++"
  },
  {
    "rad": 3.5,
    "type": "b",
    "name":  "Data Structure"
  },
  {
    "rad": 3.5,
    "type": "b",
    "name":  "SQL"
  },
  {
    "rad": 3.5,
    "type": "b",
    "name":  "GIT"
  },
  {
    "rad": 3.5,
    "type": "b",
    "name":  "VS Code"
  },
  {
    "rad": 3.5,
    "type": "b",
    "name":  "Bootstrap"
  },

]


function App() {

  return (
    <div className="App">
     <BrowserRouter>
          <Navbar/>
          <Suspense  fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/career" element={<Timeline />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skills data={rawdata} height={745} width={1440}/>} />
        </Routes>
        </Suspense> 
      </BrowserRouter>
    </div>
  );
}

export default App;
