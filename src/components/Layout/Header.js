import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <p>Skis wholesaler</p>
        </div>
        <div className={classes.navigation}>
          <div>Contact</div>
          <div>About us</div>
          <div>Store</div>
        </div>
        <div className={classes.cart}>
          <HeaderCartButton/>
        </div>
      </header>
    </>
  );
};
export default Header;
