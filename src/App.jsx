import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./assets/components/Dashboard";
import PrivateRoute from "./assets/components/PrivateRoute";
import AuthWrapper from "./assets/components/AuthWrapper";
import Login from "./assets/components/Login";
import Error from "./assets/components/Error";
import "./App.css";

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
