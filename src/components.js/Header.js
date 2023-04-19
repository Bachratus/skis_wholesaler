import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>LOGO</div>
        <div className={classes.navigation}>
          <div>Contact</div>
          <div>About us</div>
          <div>Store</div>
        </div>
        <div className={classes.cart}>
          <div><p>cart button</p></div>
        </div>
      </header>
    </>
  );
};
export default Header;
