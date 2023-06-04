import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./assets/components/Dashboard";
import PrivateRoute from "./assets/components/PrivateRoute";
import AuthWrapper from "./assets/components/AuthWrapper";
import Login from "./assets/components/Login";
import Error from "./assets/components/Error";
import "./App.css";
const date = new Date();

let day = String(date.getDate()).padStart(2, "0");
let month = String(date.getMonth() + 1).padStart(2, "0");
let year = date.getFullYear();

let currentDate = `${year}${month}${day}`;
console.log(currentDate);

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
};
export default App;
