import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { json } from "react-router-dom";
import classes from "./Logging.module.css";
import profilePng from "../components/Icons/profilePng.png";

const LoggingPage = () => {
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
      setError(error.message);
    }
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
          <form>
            <div className={classes.formItem}>
              <label>Login</label>
              <input></input>
            </div>
            <div className={classes.formItem}>
              <label>Password</label>
              <input></input>
            </div>
            <div className={classes.button}>
              <button>Continue</button>
            </div>
          </form>
        </div>
      </div>

      <p>Logging page</p>
      {error && <p>{error.message}</p>}
      <button onClick={logInHandler}>log in</button>
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
