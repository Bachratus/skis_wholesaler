import { Outlet } from "react-router-dom";
import Header from "../components.js/Header";

const Root = () => {
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Root;
