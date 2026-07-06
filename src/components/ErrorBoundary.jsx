import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error });
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      const { error } = this.state;
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>{error.message}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      );
    }
    return this.props.children;
  }
}