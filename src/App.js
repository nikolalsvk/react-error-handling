import logo from './logo.svg';
import './App.css';
import CrashableComponent from './CrashableComponent';
import ErrorBoundary from './ErrorBoundary';
import CrashableButton from './CrashableButton';
import SetTimeoutButton from './SetTimeoutButton';
import FancyDependencyErrorHandling from './FancyDependencyErrorHandling'
import CrashableComponentHOC from './CrashableComponentHOC';
import CrashableComponentCustomHOC from './CrashableComponentCustomHOC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <h3>Simple component with an error</h3>
      <ErrorBoundary>
        <CrashableComponent />
      </ErrorBoundary>

      <h3>Simple button that throws an error</h3>
      <p>
        <CrashableButton />
      </p>

      <h3>Simple button that throws an error after a delay</h3>
      <p>
        <SetTimeoutButton />
      </p>

      <h3>Simple component with an error boundary by react-error-boundary</h3>
      <p>
        <FancyDependencyErrorHandling />
      </p>

      <h3>Simple component with an HOC error boundary by react-error-boundary</h3>
      <p>
        <CrashableComponentHOC />
      </p>

      <h3>Simple component with a custom HOC error boundary</h3>
      <p>
        <CrashableComponentCustomHOC />
      </p>
    </div>
  );
}

export default App;
