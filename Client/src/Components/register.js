import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { registerCall, loginCall } from "../api/user.api";
import { setSessionToken } from "../helper";
import { useDispatch } from "react-redux";
import { setUser } from "../state/userSlice";
import { useForm } from "react-hook-form";

const Register = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const [name, setName] = useState("");
  const [user_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [formError, setFormError] = useState(null);

  const history = useHistory();

  const handle_Submit = async (e) => {
    // e.preventDefault();
    try {
      //insert ajax call here to post a user creation
      await registerCall({ name, user_name, email, password });
      const { token, user } = await loginCall({ user_name, password });
      setSessionToken(token);

      dispatch(setUser(user));
      e.target.reset();

      await history.push("/account");
    } catch (error) {
      setFormError(error.message);
    }
  };

  const tryAgain = () => {
    setFormError(null);
  };

  if (formError === null) {
    return (
      <Wrapper>
        <StyledTitle>Register</StyledTitle>
        <Form onSubmit={handleSubmit(handle_Submit)}>
          <TextWrapper>
            <Title>Full Name</Title>
            <TextInput
              type="text"
              name="fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={register({ required: true })}
            />
            {errors.fullname && (
              <StyledError>Full name is required</StyledError>
            )}
          </TextWrapper>
          <TextWrapper>
            <Title>Username</Title>
            <TextInput
              type="text"
              value={user_name}
              name={"user_name"}
              onChange={(e) => setUserName(e.target.value)}
              ref={register({ required: true })}
            />
            {errors.user_name && (
              <StyledError>Username is required</StyledError>
            )}
          </TextWrapper>
          <TextWrapper>
            <Title>Email</Title>
            <TextInput
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={register({ required: true })}
            />
            {errors.email && <StyledError>Email is required</StyledError>}
          </TextWrapper>
          <TextWrapper>
            <Title>Password</Title>
            <TextInput
              type="password"
              value={password}
              name="errorMessage"
              onChange={(e) => setPass(e.target.value)}
              ref={register({ required: true, minLength: 5 })}
            />
            {errors.errorMessage?.type === "required" && (
              <StyledError>Password is required</StyledError>
            )}
            {errors.errorMessage?.type === "minLength" && (
              <StyledError>
                Password must be at least 5 characters long
              </StyledError>
            )}
          </TextWrapper>
          <RegisterBtn to="/home" type="submit" value="Register" />
        </Form>
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

export default Register;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: green solid 2px; */
  margin-left: 10vw;

  /* padding:40px; */
`;
const Form = styled.form`
  /* border: solid deeppink 2px  */
`;
const Title = styled.h1`
  color: grey;
  font-size: 18px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
`;

const RegisterBtn = styled.input`
  margin-top: 1.5rem;
  margin-left: 4px;
  border: solid 2px black;
  background: white;
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

const TextInput = styled.input`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 44px;
  font-size: 1rem;
`;

const TextWrapper = styled.div`
  padding: 5px;
  /* border: solid blue 1px  */
`;

const StyledTitle = styled.h1`
  font-size: 50px;
  font-weight: 500;
`;

const StyledError = styled.span`
  color: red;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 10px;
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

/* // const check = styled.div ` */
/* // .overlay {
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: rgba(0, 0, 0, 0.7);
//   transition: opacity 500ms;
//   visibility: hidden;
//   opacity: 0;
// }
// .overlay:target {
//   visibility: visible;
//   opacity: 1;
// }

// .popup {
//   margin: 70px auto;
//   padding: 20px;
//   background: #fff;
//   border-radius: 5px;
//   width: 30%;
//   position: relative;
//   transition: all 5s ease-in-out;
// }

// .popup h2 {
//   margin-top: 0;
//   color: #333;
//   font-family: Tahoma, Arial, sans-serif;
// }
// .popup .close {
//   position: absolute;
//   top: 20px;
//   right: 30px;
//   transition: all 200ms;
//   font-size: 30px;
//   font-weight: bold;
//   text-decoration: none;
//   color: #333;
// }
// .popup .close:hover {
//   color: #06D85F;
// }
// .popup .content {
//   max-height: 30%;
//   overflow: auto;
// }

// @media screen and (max-width: 700px){
//   .box{
//     width: 70%;
//   }
//   .popup{
//     width: 70%;
//   }
// }
// ` */
