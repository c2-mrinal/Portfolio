import React, { lazy, Suspense, createContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Main/Navbar";
import Loader from "./Shared/Loader";
import configureStore from "./Store/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Intro = lazy(() => import("./Components/Intro"));
const Timeline = lazy(() => import("./Components/Timeline"));
const Contact = lazy(() => import("./Components/Contact"));
const Skills = lazy(() => import("./Components/Skill"));
const About = lazy(() => import("./Components/About"));

function App() {
  return (
    <div className="App">
      <Provider store={configureStore()}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes className="headerPlaced">
              <Route path="/" element={<Intro />} />
              <Route path="/career" element={<Timeline />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/about"
                element={<About style={{ margin: "200px" }} />}
              />
              <Route
                path="/skill"
                element={<Skills height={745} width={1440} />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
