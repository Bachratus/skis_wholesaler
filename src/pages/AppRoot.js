import { Outlet, json, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppRoot = () => {
  const isLoggedIn = useLoaderData();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLoggedIn) navigate('/')
  },[isLoggedIn,navigate])

  return (
    <>
      <div>{isLoggedIn.toString()}</div>
      <Outlet />
    </>
  );
};
export default AppRoot;

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
