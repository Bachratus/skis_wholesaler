import { Outlet} from "react-router-dom";
import Header from "../components/Layout/Header";

const Root = () => {
  return (
    <>
        <Outlet/>
    </>
  );
};
export default Root;
