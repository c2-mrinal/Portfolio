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
    "value": 4.5,
    "type": "a",
    "label":  "Javascript"
  },
  {
    "value": 4,
    "type": "a",
    "label":  "TypeScript"
  },
  {
    "value": 4.5,
    "type": "a",
    "label":  "ReactJS"
  },
  {
    "value": 5,
    "type": "a",
    "label":  "CSS"
  },
  {
    "value": 5,
    "type": "a",
    "label":  "HTML"
  },
  {
    "value": 4,
    "type": "c",
    "label":  "Jquery"
  },
  {
    "value": 3,
    "type": "b",
    "label":  "NodeJs"
  },
  {
    "value": 2.5,
    "type": "b",
    "label":  "ExpressJS"
  },
  {
    "value": 3.5,
    "type": "b",
    "label":  "VueJS"
  },
  {
    "value": 3.5,
    "type": "b",
    "label":  "C++"
  },
  {
    "value": 3.5,
    "type": "b",
    "label":  "Data Structure"
  },
  {
    "value": 3.5,
    "type": "b",
    "label":  "SQL"
  },
  {
    "value": 3.5,
    "type": "b",
    "label":  "GIT"
  },
  {
    "value": 3.5,
    "type": "b",
    "label":  "VS Code"
  },
  {
    "value": 3.5,
    "type": "b",
    "label":  "Bootstrap"
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
