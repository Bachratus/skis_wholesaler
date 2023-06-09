import classes from "./Cart.module.css";
import Button from "../UI/Button";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";
import useInput from "../../hooks/use-input";
import { cartActions } from "../../store/cart-slice";
import { useState } from "react";

const Cart = (props) => {
  const dispatch = useDispatch();
  const [ordered, setOrdered] = useState(false);

  const {
    enteredValue: enteredName,
    isValueValid: isNameValid, //to form validity
    isInputValid: isNameInputValid,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameInputBlurHandler,
    resetInput: resetNameInput,
  } = useInput((value) => value.trim().length > 2);
  const {
    enteredValue: enteredSurname,
    isValueValid: isSurnameValid, //to form validity
    isInputValid: isSurnameInputValid,
    onChangeHandler: surnameChangeHandler,
    onBlurHandler: surnameInputBlurHandler,
    resetInput: resetSurnameInput,
  } = useInput((value) => value.trim().length > 2);
  const {
    enteredValue: enteredEmail,
    isValueValid: isEmailValid, //to form validity
    isInputValid: isEmailInputValid,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailInputBlurHandler,
    resetInput: resetEmailInput,
  } = useInput((value) => value.trim().includes("@"));
  const {
    enteredValue: enteredAddress,
    isValueValid: isAddressValid, //to form validity
    isInputValid: isAddressAreaValid,
    onChangeHandler: addressChangeHandler,
    onBlurHandler: addressAreaBlurHandler,
    resetInput: resetAddressInput,
  } = useInput((value) => value.trim().length >= 10);

  const cartItems = useSelector((state) => state.cart.items);
  let totalPrice = 0;
  cartItems.map((item) => {
    totalPrice += item.price * item.quantity;
    return {
      ...item,
    };
  });
  const cartItemsJSX = (
    <>
      <section className={classes.products}>
        <Products skisList={cartItems} cartStyle={true} />
      </section>
    </>
  );

  let cartIsValid =
    isNameValid &&
    isSurnameValid &&
    isEmailValid &&
    isAddressValid &&
    cartItems.length > 0;

  const orderClickHandler = () => {
    if (!cartIsValid) return;
    console.log("send");
    dispatch(cartActions.resetCart());
    resetNameInput();
    resetSurnameInput();
    resetEmailInput();
    resetAddressInput();
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
    }, 2000);
  };

  const cartModalContent = (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h1>Your cart</h1>
          {cartItemsJSX}
        </div>
        <div className={classes.container}>
          <h1>Your data</h1>
          <section className={classes.form}>
            <form>
              <Input
                title="Name"
                isInputValid={isNameInputValid}
                changeHandler={nameChangeHandler}
                enteredValue={enteredName}
                blurHandler={nameInputBlurHandler}
                warningText="Please enter valid name!"
              />
              <Input
                title="Surname"
                isInputValid={isSurnameInputValid}
                changeHandler={surnameChangeHandler}
                enteredValue={enteredSurname}
                blurHandler={surnameInputBlurHandler}
                warningText="Please enter valid surname!"
              />
              <Input
                title="Email"
                isInputValid={isEmailInputValid}
                changeHandler={emailChangeHandler}
                enteredValue={enteredEmail}
                blurHandler={emailInputBlurHandler}
                warningText="Please enter valid email!"
              />
              <Textarea
                rows={5}
                title="Adress"
                isAreaValid={isAddressAreaValid}
                changeHandler={addressChangeHandler}
                enteredValue={enteredAddress}
                blurHandler={addressAreaBlurHandler}
                warningText="The content must have min. 10 chars"
              />
            </form>
          </section>
        </div>
        {ordered && <h1 className={classes.sent}>
          <span>You have successfully placed an order!</span>
        </h1>}
      </div>
      <div className={classes.total}>
        <span>Total price: </span>
        <span>{totalPrice.toFixed(2)}$</span>
      </div>
      <div className={classes.actions}>
        <Button onClick={props.onClose} isValid={true} text="Close" />
        <Button
          onClick={orderClickHandler}
          isValid={cartIsValid}
          text="Order"
        />
      </div>
    </>
  );
  return <>{cartModalContent}</>;
};
export default Cart;
