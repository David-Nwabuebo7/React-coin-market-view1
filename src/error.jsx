import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service (optional)
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return <h1>Something went wrong😞...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
