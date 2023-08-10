import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import { Suspense } from "react";
import './i18n';
const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router>
          <Routes>
            <Route path="/" element={<UserDetails />} />
            <Route path="*" element={<p>Page Not Found</p>} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
