import { ErrorBoundary } from 'react-error-boundary'
import CrashableComponent from './CrashableComponent'

const FancyDependencyErrorHandling = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => {
        // You can also log the error to an error reporting service like AppSignal
        // logErrorToMyService(error, errorInfo);
        console.error(error)
      }}
    >
      <CrashableComponent />
    </ErrorBoundary>
  )
}

const ErrorFallback = ({ error }) => (
  <div>
    <p>Something went wrong 😭 (writing this using the react-error-boundary)</p>

    {error.message && (
      <span>Here's the error: {error.message}</span>
    )}
  </div>
)

export default FancyDependencyErrorHandling
