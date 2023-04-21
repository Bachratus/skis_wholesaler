import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

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
          <button onClick={props.logoutHander}>Logout</button>
        </div>
      </header>
    </>
  );
};
export default Header;
