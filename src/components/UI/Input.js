import classes from "./Input.module.css";

const Input = (props) => {
  const {
    title,
    isInputValid,
    changeHandler,
    enteredValue,
    blurHandler,
    warningText,
  } = props;
  return (
    <>
      <div className={classes.formItem}>
        <label>{title}</label>
        <input
          className={isInputValid ? "" : classes.invalid}
          onChange={changeHandler}
          value={enteredValue}
          onBlur={blurHandler}
        />
        {!isInputValid && (
          <p className={classes.invalid}>{warningText}</p>
        )}
      </div>
    </>
  );
};
export default Input;
