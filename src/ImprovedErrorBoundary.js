import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service like AppSignal
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state

    if (hasError) {
      // You can render any custom fallback UI
      return <ErrorFallback error={error} />
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ error }) => (
  <div>
    <p>Something went wrong 😭 (but, error handling logic is improved)</p>

    {error.message && (
      <span>Here's the error: {error.message}</span>
    )}
  </div>
)

const errorBoundary = (WrappedComponent) => {
  return class extends ErrorBoundary {
    render() {
      const { hasError, error } = this.state

      if (hasError) {
        // You can render any custom fallback UI
        return <ErrorFallback error={error} />
      }

      return <WrappedComponent {...this.props} />
    }
  }
}

export { errorBoundary }
