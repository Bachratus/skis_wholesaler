import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import logoutIcon from '../Icons/logoutIcon.png'
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to='/home' >Skis Wholesaler</Link>
          <Link to='/home' >SW</Link>
        </div>
        <div className={classes.navigation}>
          <div><Link to='/contact'>Contact</Link></div>
          <div><Link to='/about-us'>About us</Link></div>
          <div><Link to='/store'>Store</Link></div>
        </div>
        <div className={classes.cart}>
          <HeaderCartButton/>
        </div>
        <div className={classes.logout}>
          <button onClick={props.logoutHander}><img src={logoutIcon} alt=''/></button>
        </div>
      </header>
    </>
  );
};
export default Header;
