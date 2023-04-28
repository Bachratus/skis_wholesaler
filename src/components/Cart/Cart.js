import classes from "./Cart.module.css";
import Button from "../UI/Button";

const Cart = (props) => {
  return (
    <>
      <div className={classes.div}></div>
      <Button onClick={props.onClose} isValid={true} text='Close'/>
    </>
  );
};
export default Cart;
