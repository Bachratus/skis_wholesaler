const Input = (props) => {
  return (
    <div className={props.divClasses}>
      <label>{props}</label>
      <input
        className={props.inputClasses}
        onChange={props.changeHandler}
        value={props.value}
        onBlur={props.blurHandler}
      />
      {!props.isInputValid && (
        <p className={props.invalidClass}>Please enter valid login!</p>
      )}
    </div>
  );
};
export default Input;
