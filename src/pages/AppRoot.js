import { Outlet, json, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Layout/Header";

const AppRoot = () => {
  const [error,setError] =useState();

  const isLoggedIn = useLoaderData();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  const onLogoutHandler = async () => {
    setError(null)
    try{
      const response = await fetch('https://react-http-9cc9c-default-rtdb.europe-west1.firebasedatabase.app/LoginStatus.json',{
        method:'PUT',
        body:JSON.stringify({isLoggedIn:false})
      })
      if(!response.ok) throw new Error("Something went wrong")
      navigate('/')
    }catch(error){
      setError(error.message)
    }
  }

  return (
    <>
      <Header logoutHander={onLogoutHandler}/>
      {error && <p>{error.message}</p>}
      <main>
        <Outlet />
      </main>
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
