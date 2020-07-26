import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import { loginCall } from "../api/user.api";
import { setSessionToken } from "../helper";
import { useDispatch } from "react-redux";
import { setUser } from "../state/userSlice";
import { useForm } from "react-hook-form";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const [user_name, setUserName] = useState("");
  const [password, setPass] = useState("");
  const history = useHistory();
  const [formError, setFormError] = useState(null);

  const handleSubmitInt = async (e) => {
    // e.preventDefault();
    try {
      const { token, user } = await loginCall({ user_name, password });

      // console.log({ token });
      // console.log({ user });

      setSessionToken(token);

      dispatch(setUser(user));

      await history.push("/account");
    } catch (error) {
      // console.log(error);
      setFormError(error.message);
    }
  };

  const tryAgain = () => {
    setFormError(null);
  };

  if (formError === null) {
    return (
      <Wrapper>
        <SDivWrap>
          <StyledTitle>Login</StyledTitle>
          <Form onSubmit={handleSubmit(handleSubmitInt)}>
            <TextWrapper>
              <Title>Username *</Title>
              <TextInput
                type="text"
                name="user_name"
                value={user_name}
                onChange={(e) => setUserName(e.target.value)}
                ref={register({ required: true, minLength: 3 })}
              />
              {errors.user_name && (
                <StyledError>
                  Username is required and must be at least 3 characters long
                </StyledError>
              )}
            </TextWrapper>
            <TextWrapper>
              <Title>Password *</Title>
              <TextInput
                type="password"
                name="pass"
                value={password}
                onChange={(e) => setPass(e.target.value)}
                ref={register({ required: true, minLength: 3 })}
              />
              {errors.pass && (
                <StyledError>
                  Password is required and must be at least 3 characters long
                </StyledError>
              )}
            </TextWrapper>
            <StyledBtn type="submit" value="SUBMIT">
              LOGIN
            </StyledBtn>
          </Form>
          <StyledNewUserWrapper>
            <StyledNewUserText>new user? </StyledNewUserText>
            <Link to="/reg-user">
              <StyledNewUserText>Sign up</StyledNewUserText>
            </Link>
          </StyledNewUserWrapper>
        </SDivWrap>
      </Wrapper>
    );
  } else {
    return (
      <div>
        <h1>{formError}</h1>
        <StyledBtn onClick={tryAgain}>Try Again</StyledBtn>
      </div>
    );
  }
};

export default Login;

const SDivWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 10vw;
  /* position: relative; */
  /* border: green solid 2px; */
  /* padding:40px; */
`;

const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
`;

const Form = styled.form`
  /* border: yellow solid 2px; */
`;
const Title = styled.h1`
  color: grey;
  font-size: 18px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
`;

const TextInput = styled.input`
  /* position: relative; */
  width: 99%;
  height: 44px;
  /* padding: 12px 20px; */
  /* margin: 0 0 14px; */
  font-size: 1rem;
`;

const TextWrapper = styled.div`
  /* border: blue solid 2px; */
`;

const StyledTitle = styled.h1`
  font-size: 50px;
  font-weight: 500;
`;

const StyledBtn = styled.button`
  margin-top: 1.5rem;
  border: solid 2px black;
  background: white;
  /* margin: 2rem; */
  padding: 1rem;
  font-weight: 600;
  font-size: 0.7rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 7rem;
  &:hover {
    cursor: pointer;
    background: #c9f2f6;
    border: solid 2px white;
  }
`;

const StyledNewUserWrapper = styled.div`
  display: flex;
`;

const StyledNewUserText = styled.h3`
  font-weight: 100;
  margin-right: 2px;
  text-decoration: none;
`;
const StyledError = styled.span`
  color: red;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 10px;
`;
