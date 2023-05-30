import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./assets/components/Dashboard";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <DateTimeInfo />
      </Routes>
    </Router>
  );
};
export default App;
