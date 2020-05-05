import React, { useState, Suspense, useCallback } from "react";
import { hot } from "react-hot-loader/root";

const AverageComponent = React.lazy(() => import("./averageComponent"));
const TotalScoreComponent = React.lazy(() => import("./totalScoreComponent"));

$("body").css("background-color", "lightSkyBlue");

const App: React.FunctionComponent = () => {
  const [showAverage, setShowAverage] = useState(false);
  const [showTotal, setShowTotal] = useState(false);

  const handleShowAverage = useCallback(() => setShowAverage(true), []);
  const handleShowTotal = useCallback(() => setShowTotal(true), []);

  return (
    <div>
      <h1>Hello from React DOM</h1>
      {showAverage && (
        <Suspense fallback={<div>Loading...</div>}>
          <AverageComponent />
        </Suspense>
      )}
      {!showAverage && (
        <button type="button" onClick={handleShowAverage}>
          Add Average Component
        </button>
      )}

      {!showTotal && (
        <button type="button" onClick={handleShowTotal}>
          Show Total Component
        </button>
      )}
      {showTotal && (
        <Suspense fallback={<div>Loading...</div>}>
          <TotalScoreComponent />
        </Suspense>
      )}
    </div>
  );
};

export default hot(App);
