import React, { lazy, Suspense, useLayoutEffect, useState } from "react";
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

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function App() {
  const [width, height] = useWindowSize();

  console.log(width, height);
  return (
    <div className="App">
      <Provider store={configureStore()}>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes className="headerPlaced">
              <Route
                path="/"
                element={<Intro height={height} width={width} />}
              />
              <Route
                path="/career"
                element={<Timeline height={height} width={width} />}
              />
              <Route
                path="/contact"
                element={<Contact height={height} width={width} />}
              />
              <Route
                path="/about"
                element={<About style={{ margin: "200px" }} />}
              />
              <Route
                path="/skill"
                element={<Skills height={height} width={width} />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
