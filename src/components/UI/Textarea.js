import classes from "./Textarea.module.css";

const Textarea = (props) => {
  const {
    rows,
    title,
    isAreaValid,
    changeHandler,
    enteredValue,
    blurHandler,
    warningText,
  } = props;
  return (
    <div className={classes.formItem}>
      <label>{title}</label>
      <textarea
        type="text"
        rows={rows}
        className={isAreaValid ? "" : classes.invalid}
        onChange={changeHandler}
        value={enteredValue}
        onBlur={blurHandler}
      />
      {!isAreaValid && <p className={classes.invalid}>{warningText}</p>}
    </div>
  );
};
export default Textarea;
