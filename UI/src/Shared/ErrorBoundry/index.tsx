import React, { Component } from "react";
import NotFound from "../NotFound";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.error("Error:", { error, errorInfo });
	}

	render() {
		if (this.state.hasError) {
			return <div>{this.props.hide ? "" : <NotFound />}</div>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
