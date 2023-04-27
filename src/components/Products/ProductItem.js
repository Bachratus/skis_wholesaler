import classes from "./ProductItem.module.css";
import Button from "../UI/Button";

const ProductItem = (props) => {
  const {id,image,name,price,size,forWhom}= props.item

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img
          src={image}
          alt=""
        ></img>
      </div>
      <div className={classes.name}>
        <span>{name}</span>
      </div>
      <div className={classes.quantity}>
        <div>
          <input type="number" defaultValue={1} min={1} max={5} />
        </div>
      </div>
      <div className={classes.actions}>
        <div>
          <Button isValid={true} text="Add to cart" />
        </div>
      </div>
  </li>
  );
};
export default ProductItem;
