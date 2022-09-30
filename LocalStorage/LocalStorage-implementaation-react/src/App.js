import React, { Suspense } from "react";
// import Form from "./containers/Form";
// import ViewContainer from "./containers/ViewContainer";
const Form = React.lazy(() => import("./containers/Form"));
const ViewContainer = React.lazy(() => import("./containers/ViewContainer"));
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorBoundary";
import LoadingSpinner from "./components/Loader";

// IMPORTING STATES...
export const App = () => {
  return (
    <div className="wrapper">
      <h1>Book List</h1>
      <p>Local Storage Implementation</p>
      <div className="main">
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
          <Suspense fallback={<div><LoadingSpinner/></div>}>
            <Form />
            <ViewContainer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;
