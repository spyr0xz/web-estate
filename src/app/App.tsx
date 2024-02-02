import { Suspense } from "react";
import AppRouter from "./providers/router/ui/AppRouter";

const App = () => {
  return (
  <div className="app">
    <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
    </Suspense>
  </div>);
};

export default App;
