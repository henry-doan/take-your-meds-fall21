import React from 'react';
import { Link } from 'react-router-dom';
import { LandingContainer, LandingImg } from '../../styles/homeStyles';
import styled from 'styled-components';
import logo from '../../images/logo.png'

const RegisterButton = styled.button`
  background-color: #3A7D3C;
  font-size: 20px;
  color: white;
  font-family: Verdana;
  border-radius: 50px;
  border: none;
  display: inline-block;
  padding: 15px 100px;
  width: 100%;
  margin: 20% 0 auto;
`
const LoginButton = styled.button`
  background-color: #50A646;
  font-size: 20px;
  color: white;
  font-family: Verdana;
  border-radius: 50px;
  border: none;
  display: inline-block;
  padding: 15px 100px;
  width: 100%;
  margin: 0 auto;
`
const ButtonContainer = styled.div`
display: grid;
place-content: center;
`

const Landing = () => {
  return (
    <>
    <LandingContainer>
      <LandingImg src={logo} alt="logo" />
        <ButtonContainer>
          <Link to="/register" >
            <RegisterButton>Register</RegisterButton>
            </Link>
            <br />
            <Link to="/login" >
            <LoginButton>Login</LoginButton>
          </Link>
        </ButtonContainer>
      </LandingContainer>
    </>
  )
}


export default Landing;
