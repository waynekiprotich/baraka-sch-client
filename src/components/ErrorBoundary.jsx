import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // In production, forward to a logging service (e.g. Sentry) here.
    console.error('ErrorBoundary caught an error:', error, info);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            background:
              'linear-gradient(150deg, var(--purple-dark, #3D1B65), var(--purple, #5B2C90))',
            color: '#fff',
          }}
        >
          <p
            style={{
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gold, #F4B400)',
              fontWeight: 700,
              marginBottom: '12px',
            }}
          >
            Something went wrong
          </p>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '16px' }}>
            We hit an unexpected bump
          </h1>
          <p style={{ maxWidth: '480px', color: 'rgba(255,255,255,.82)', marginBottom: '28px' }}>
            The page ran into an error. You can try again, or head back to safety.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={this.handleReset}
              className="btn btn-primary"
              style={{ background: 'var(--gold, #F4B400)', color: 'var(--purple-dark, #3D1B65)' }}
            >
              Try Again
            </button>
            <a href="/" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,.5)' }}>
              Back to Home
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}