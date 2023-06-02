import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  return (
    <Wrapper>
      <button onClick={loginWithRedirect}>login</button>
      <button
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        logout
      </button>
    </Wrapper>
  );
};
export default Navbar;
