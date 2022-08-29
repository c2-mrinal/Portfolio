import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Main/Navbar';

const Intro = lazy(() => import("./Components/Intro"));
const Timeline = lazy(() => import("./Components/Timeline"))
const Contact = lazy(() => import("./Components/Contact"))
const Skills = lazy(() => import("./Components/Skill"))

const rawdata = { "data": [{ "v": 18 }, { "v": 46 }, { "v": 95 }, { "v": 99 }, { "v": 35 }, { "v": 46 }, { "v": 55 }, { "v": 57 }, { "v": 84 }, { "v": 74 }, { "v": 23 }, { "v": 47 }, { "v": 15 }, { "v": 60 }, { "v": 26 }, { "v": 12 }, { "v": 47 }, { "v": 33 }, { "v": 33 }, { "v": 28 }, { "v": 71 }, { "v": 94 }, { "v": 65 }, { "v": 61 }, { "v": 10 }, { "v": 26 }, { "v": 80 }, { "v": 66 }, { "v": 65 }, { "v": 18 }, { "v": 11 }, { "v": 64 }, { "v": 41 }, { "v": 84 }, { "v": 70 }, { "v": 10 }, { "v": 33 }, { "v": 96 }, { "v": 81 }, { "v": 97 }, { "v": 23 }, { "v": 79 }, { "v": 54 }, { "v": 72 }, { "v": 100 }, { "v": 42 }, { "v": 39 }, { "v": 10 }, { "v": 37 }], "useLabels": true, "width": 600, "height": 400 }


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
          <Route path="/skill" element={<Skills data={rawdata} />} />
        </Routes>
        </Suspense> 
      </BrowserRouter>
    </div>
  );
}

export default App;
