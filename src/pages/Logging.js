import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { json } from "react-router-dom";
import classes from "./Logging.module.css";
import profilePng from "../components/Icons/profilePng.png";
import useInput from "../hooks/use-input";

const LoggingPage = () => {
  const {
    enteredValue: enteredLogin,
    isValueValid: isLoginValid,
    isInputValid: isLoginInputValid,
    onChangeHandler: loginChangeHandler,
    onBlurHandler: loginInputBlurHandler,
  } = useInput((value) => value.trim().length > 7);
  const {
    enteredValue: enteredPassword,
    isValueValid: isPasswordValid,
    isInputValid: isPasswordInputValid,
    onChangeHandler: passwordChangeHandler,
    onBlurHandler: passwordInputBlurHandler,
  } = useInput((value) => value.trim().length > 7);

  const [error, setError] = useState(null);
  const isLoggedIn = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate("/home");
  }, [isLoggedIn, navigate]);
  const logInHandler = async () => {
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-9cc9c-default-rtdb.europe-west1.firebasedatabase.app/LoginStatus.json",
        {
          method: "PUT",
          body: JSON.stringify({ isLoggedIn: true }),
        }
      );
      if (!response.ok) throw new Error("Something went wrong");
      navigate("/home");
    } catch (error) {
      setError({ message: error.message });
    }
  };

  let formIsValid=false;
  if(isLoginValid && isPasswordValid) formIsValid=true;
  const submitHandler = (event) => {
    event.preventDefault();
    if(!formIsValid) return;

    logInHandler();
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>
          <p>Sign in</p>
        </div>
        <div className={classes.icon}>
          <div className={classes.iconBackground}>
            <img src={profilePng} alt="" />
          </div>
        </div>
        <div className={classes.form}>
          <form onSubmit={submitHandler}>
            <div className={classes.formItem}>
              <label>Login</label>
              <input
                className={isLoginInputValid ? "" : classes.invalid}
                onChange={loginChangeHandler}
                value={enteredLogin}
                onBlur={loginInputBlurHandler}
              />
              {!isLoginInputValid && <p className={classes.invalid}>Please enter valid login!</p>}
            </div>
            <div className={classes.formItem}>
              <label>Password</label>
              <input
                className={isPasswordInputValid ? "" : classes.invalid}
                onChange={passwordChangeHandler}
                value={enteredPassword}
                onBlur={passwordInputBlurHandler}
              />
              {!isPasswordInputValid && <p className={classes.invalid}>Please enter valid password!</p>}
            </div>
            <div className={classes.button}>
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
      {error && <p className={classes.error}>{error.message}</p>}
    </>
  );
};
export default LoggingPage;

export const loader = async () => {
  const response = await fetch(
    "https://react-http-9cc9c-default-rtdb.europe-west1.firebasedatabase.app/LoginStatus.json"
  );
  if (!response.ok) {
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.isLoggedIn;
  }
};
