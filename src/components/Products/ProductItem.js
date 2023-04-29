import defaultClasses from "./ProductItem.module.css";
import Button from "../UI/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import cartClasses from "./cartProductItem.module.css";

const ProductItem = (props) => {
  const { id, image, name, price, size, forWhom, quantity } = props.item;
  const classes = props.cartStyle ? cartClasses : defaultClasses;

  const quantityRef = useRef();
  const dispatch = useDispatch();

  const addToCartClickHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        image: image,
        name: name,
        price: price,
        size: size,
        forWhom: forWhom,
        quantity: parseInt(quantityRef.current.value),
      })
    );
  };
  const increaseQuantityHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        image: image,
        name: name,
        price: price,
        size: size,
        forWhom: forWhom,
        quantity: 1,
      })
    );
  };
  const decreaseQuantityHandler = () => {
    dispatch(
      cartActions.removeItemFromCart({
        id: id,
      })
    );
  };
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={image} alt=""></img>
        <div className={classes.price}>
          <span>{price}</span>
        </div>
      </div>
      <div className={classes.description}>
        <div className={classes.name}>
          <span>{name}</span>
        </div>
        <div className={classes.for_whom}>
          <span>Size: {size}</span>
          <span>For: {forWhom}</span>
          <span>
            {props.cartStyle ? "Qty" : "Available"}: {quantity}
          </span>
        </div>
      </div>
      {!props.cartStyle && (
        <div className={classes.quantity}>
          <div>
            <input
              ref={quantityRef}
              type="number"
              defaultValue={1}
              min={1}
              max={5}
            />
          </div>
        </div>
      )}
      {!props.cartStyle && (
        <div className={classes.actions}>
          <div>
            <Button
              isValid={true}
              text="Add to cart"
              onClick={addToCartClickHandler}
            />
          </div>
        </div>
      )}
      {props.cartStyle && (
        <div className={classes.actions}>
          <button onClick={increaseQuantityHandler}>+</button>
          <button onClick={decreaseQuantityHandler}>-</button>
        </div>
      )}
    </li>
  );
};
export default ProductItem;
