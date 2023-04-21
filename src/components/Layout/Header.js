import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import logoutIcon from '../Icons/logoutIcon.png'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <p>Skis Wholesaler</p>
          <p>SW</p>
        </div>
        <div className={classes.navigation}>
          <div>Contact</div>
          <div>About us</div>
          <div>Store</div>
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
