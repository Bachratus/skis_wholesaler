import classes from "./Cart.module.css";
import Button from "../UI/Button";
import Products from "../Products/Products";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsJSX = (
    <>
      <section className={classes.products}>
        <Products skisList={cartItems} cartStyle={true} />
      </section>
    </>
  );

  const cartModalContent = (
    <>
    <h1>Your cart</h1>
      {cartItemsJSX}
      <div className={classes.total}>
        <span>Total price: </span>
        <span>{0}$</span>
      </div>
      <div className={classes.actions}>
        <Button onClick={props.onClose} isValid={true} text="Close" />
        <Button onClick={props.onClose} isValid={true} text="Order" />
      </div>
    </>
  );
  return <>{cartModalContent}</>;
};
export default Cart;
