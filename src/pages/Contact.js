import classes from "./Contact.module.css";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Textarea from "../components/UI/Textarea";
import useInput from "../hooks/use-input";
import { useState } from "react";

const ContactPage = () => {
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
  const [sent, setSent] = useState(false);

  let formIsValid = false;
  if (isNameValid && isSurnameValid && isEmailValid && isQueryValid)
    formIsValid = true;

  const submitHandler = (event) => {
    setSent(false);
    event.preventDefault();
    if (!formIsValid) return;

    resetNameInput();
    resetSurnameInput();
    resetEmailInput();
    resetQueryInput();
    setTimeout(() => {
      setSent(true);
    }, 200);
  };
  return (
    <>
      <div className={classes.container}>
        <section className={classes.contact}>
          <div className={classes.card}>
            <h1>contact us</h1>
            <section className={classes.open_hours}>
              <h2>Hours open</h2>
              <ul>
                <li>Monday 8:00 - 16:00</li>
                <li>Tuesday 8:00 - 16:00</li>
                <li>Wednesday 8:00 - 16:00</li>
                <li>Thursday 8:00 - 16:00</li>
                <li>Friday 8:00 - 16:00</li>
                <li>Saturday 9:00 - 13:00</li>
                <li>Sunday closed</li>
              </ul>
            </section>
            <section className={classes.data}>
              <h2>Company data</h2>
              <span>SKIS POLAND S.A.</span>
              <span>ul. Magnolii</span>
              <span>44 - 200 Racibórz</span>
              <span>info@skrzynka.skispoland.pl</span>
              <h3>ING Bank Śląski</h3>
              <span>Account number: 10 1010 1010 1010 1010 1010 1010</span>
            </section>
          </div>
        </section>

        <section className={classes.ask}>
          <h1>...or just ask us</h1>
          <form onSubmit={submitHandler}>
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
              title="Question"
              isAreaValid={isQueryAreaValid}
              changeHandler={queryChangeHandler}
              enteredValue={enteredQuery}
              blurHandler={queryAreaBlurHandler}
              warningText="The content must have min. 10 chars"
            />
            <div className={classes.actions}>
              {sent && (
                <p>
                  <span>Sent successfully!</span>
                </p>
              )}
              <Button type="submit" isValid={formIsValid} text="Send" />
            </div>
          </form>
        </section>
      </div>
    </>
  );
};
export default ContactPage;
