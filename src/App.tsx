import ErrorBoundary from "./components/error-boundary/error-boundary";
import { RadioFM } from "./components/radio-fm/radio-fm";

function App() {
  return (
    <ErrorBoundary>
      <RadioFM />
    </ErrorBoundary>
  );
}

export default App;
