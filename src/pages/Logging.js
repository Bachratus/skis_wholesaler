import { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { json } from "react-router-dom";

const LoggingPage = () => {
  const isLoggedIn = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate("/home");
  }, [isLoggedIn, navigate]);

  return (
    <>
      <p>Logging page</p>
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
