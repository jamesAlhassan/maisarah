import styled from "styled-components";
import loginImg from "../images/login-img.svg";
const Login = () => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={loginImg} alt='user login' />
        <h1>employees login</h1>
        <button className='btn'>login</button>
      </div>
    </Wrapper>
  );
};
export default Login;
