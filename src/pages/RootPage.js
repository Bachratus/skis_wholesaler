import { Outlet, useLoaderData } from "react-router-dom/dist";
import { json } from "react-router-dom/dist";
import LoginPage from "./LoginPage";

const RootPage = () => {
  const data = useLoaderData();
  const isLoggedIn = data.isLoggedIn;
  return (
    <>
      {isLoggedIn && <Outlet />}
      {!isLoggedIn && <LoginPage />}
    </>
  );
};
export default RootPage;

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
    const data = await response.json();
    return data;
  }
};

