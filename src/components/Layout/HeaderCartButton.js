import CartIcon from '../Cart/CartIcon'
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    return (
        <button className={`${classes.button} ${classes.bump}`}>
          <span className={classes.icon}>
            <CartIcon></CartIcon>
          </span>
          <span className={classes.name}>Your Cart</span>
          <span className={classes.badge}>5</span>
        </button>
      )
}
export default HeaderCartButton;