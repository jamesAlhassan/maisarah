import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./assets/components/Dashboard";
import PrivateRoute from "./assets/components/PrivateRoute";
import AuthWrapper from "./assets/components/AuthWrapper";
import Login from "./assets/components/Login";
import Error from "./assets/components/Error";
import "./App.css";
import axios from "axios";

// const pixelaEndPoint = "https://pixe.la/v1/users";
// const request = (token, username) => {
//   axios({
//     method: "post",
//     url: pixelaEndPoint,
//     data: {
//       token,
//       username,
//       agreeTermsOfService: "yes",
//       notMinor: "yes",
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// request("demadema12345", "demadema");

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
