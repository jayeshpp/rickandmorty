import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: true };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true, error, info });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    let env = "dev";
    const { error, info, hasError } = this.state;
    const excludeList = ["staging", "production"];
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-page text-center">
          <div className="errorImage"></div>
          <h2 className="mt-4">Something went wrong!</h2>
          <p className="mb-4">Internal Error</p>
          {!excludeList.includes(env) && (
            <div className="p-3 message">
              <div>{error.toString()}</div>
              <div>{info && info.componentStack.toString()}</div>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
