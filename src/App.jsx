import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./assets/components/Dashboard";
import Login from "./assets/components/Login";
import Error from "./assets/components/Error";
import Navbar from "./assets/components/Navbar";
import "./App.css";

import axios from "axios";

const pixelaEndPoint = "https://pixe.la/v1/users";
const request = (token, username) => {
  axios({
    method: "post",
    url: pixelaEndPoint,
    data: {
      token,
      username,
      agreeTermsOfService: "yes",
      notMinor: "yes",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// request("demadema12345", "demadema");

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};
export default App;
