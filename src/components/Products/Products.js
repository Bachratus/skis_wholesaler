import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <ul className={classes.list}>
      {props.skisList.map(item => <ProductItem item={item} key={item.id} cartStyle={props.cartStyle}/>)}
    </ul>
  );
};
export default Products;
