import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./Main/Navbar";
import Loader from "./Shared/Loader";
import configureStore from "./Store/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Shared/Fonts/fonts.css";
import ErrorBoundary from "./Shared/ErrorBoundry";
const Intro = lazy(() => import("./Components/Intro"));
const Timeline = lazy(() => import("./Components/Timeline"));
const Contact = lazy(() => import("./Components/Contact"));
const Skills = lazy(() => import("./Components/Skill"));
const About = lazy(() => import("./Components/About"));
const NotFound = lazy(() => import("./Shared/NotFound"));
const UnderProgress = lazy(() => import("./Shared/UnderProgress"));

function App() {
	return (
		<div className="App">
			<Provider store={configureStore()}>
				<BrowserRouter>
					<Header />
					<Suspense fallback={<Loader />}>
						<Routes className="headerPlaced">
							<Route
								path="/"
								element={
									<ErrorBoundary>
										<Intro />
									</ErrorBoundary>
								}
							/>
							<Route
								path="/career"
								element={
									<ErrorBoundary>
										<Timeline />
									</ErrorBoundary>
								}
							/>
							<Route
								path="/contact"
								element={
									<ErrorBoundary>
										<Contact />
									</ErrorBoundary>
								}
							/>
							<Route
								path="/about"
								element={
									<ErrorBoundary>
										<About />
									</ErrorBoundary>
								}
							>
								<Route
									path=":folder"
									element={
										<ErrorBoundary>
											<About />
										</ErrorBoundary>
									}
								></Route>
							</Route>
							<Route
								path="/skill"
								element={
									<ErrorBoundary>
										<Skills />
									</ErrorBoundary>
								}
							/>
							<Route
								path="/loader"
								element={
									<ErrorBoundary>
										<Loader />
									</ErrorBoundary>
								}
							/>
							<Route
								path="*"
								element={
									<ErrorBoundary>
										<NotFound />
									</ErrorBoundary>
								}
							/>
						</Routes>
					</Suspense>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
