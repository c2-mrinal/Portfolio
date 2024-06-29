import React, { useState, useEffect, useTransition, lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
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

const Blog = lazy(() => import("./Components/Blog"));
const UnderProgress = lazy(() => import("./Shared/UnderProgress"));

function App() {
	const [isPending, startTransition] = useTransition(false);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleRouteChange = (path) => {
		startTransition(() => {
			navigate(path);
		});
	};

	useEffect(() => {
		if (isPending) {
			setIsLoading(true); // Simulate loading state
		} else {
			setIsLoading(false);
		}
	}, [isPending]);

	return (
		<div className="App">
			<Provider store={configureStore()}>
				<Header handleRouteChange={handleRouteChange} />
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
							/>
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
						<Route
							path="/blog"
							element={
								<ErrorBoundary>
									<Blog />
								</ErrorBoundary>
							}
						/>
					</Routes>
				</Suspense>
			</Provider>
		</div>
	);
}

export default App;
