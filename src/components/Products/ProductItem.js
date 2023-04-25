import classes from "./ProductItem.module.css";
import Button from "../UI/Button";

const ProductItem = () => {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img
          src="https://ski24.pl/134088-large_default/narty-zjazdowe-meskie-atomic-redster-tr-atomic-x12-z-grip-walk.jpg"
          alt=""
        ></img>
      </div>
      <div className={classes.name}>
        <span>product name</span>
      </div>
      <div className={classes.quantity}>
        <div>
          <input type="number" defaultValue={1} min={1} max={5} />
        </div>
      </div>
      <div className={classes.actions}>
        <div>
          <Button text="Add to cart" />
        </div>
      </div>
    </li>
  );
};
export default ProductItem;
