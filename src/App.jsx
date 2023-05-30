import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./assets/components/Dashboard";
import Login from "./assets/components/Login";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
};
export default App;
