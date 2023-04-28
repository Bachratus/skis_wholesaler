import { useSelector } from "react-redux";
import CartIcon from "../Icons/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const cartItemsQuantity = useSelector((state) => state.cart.totalQuantity);
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartItemsQuantity === 0) {
      return;
    }
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItemsQuantity]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span className={classes.name}>Your Cart</span>
      <span className={classes.badge}>{cartItemsQuantity}</span>
    </button>
  );
};
export default HeaderCartButton;
