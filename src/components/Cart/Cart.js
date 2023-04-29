import classes from "./Cart.module.css";
import Button from "../UI/Button";
import Products from "../Products/Products";
import { useSelector } from "react-redux";
import Input from '../UI/Input'
import Textarea from "../UI/Textarea";
import useInput from "../../hooks/use-input";

const Cart = (props) => {
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
    enteredValue: enteredQuery,
    isValueValid: isQueryValid, //to form validity
    isInputValid: isQueryAreaValid,
    onChangeHandler: queryChangeHandler,
    onBlurHandler: queryAreaBlurHandler,
    resetInput: resetQueryInput,
  } = useInput((value) => value.trim().length >= 10);

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
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h1>Your cart</h1>
          {cartItemsJSX}
        </div>
        <div className={classes.container}>
          <h1>Your data</h1>
          <section className={classes.form}>
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
              isAreaValid={isQueryAreaValid}
              changeHandler={queryChangeHandler}
              enteredValue={enteredQuery}
              blurHandler={queryAreaBlurHandler}
              warningText="The content must have min. 10 chars"
            />
          </section>
        </div>
      </div>
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
