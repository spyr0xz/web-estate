import { Suspense } from "react";
import AppRouter from "./providers/router/ui/AppRouter";
import Navbar from "../widgets/Navbar/ui/Navbar";

const App = () => {
  return (
  <div className="app">
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
    </Suspense>
  </div>);
};

export default App;
