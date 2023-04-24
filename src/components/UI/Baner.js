import classes from "./Baner.module.css";

const Baner = (props) => {
  return (
    <>
      <div
        className={classes.container}
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className={classes.overlay}></div>
        <h1>{props.text}</h1>
      </div>
    </>
  );
};
export default Baner;
