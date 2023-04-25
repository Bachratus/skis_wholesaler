import ProductItem from './ProductItem';
import classes from './Products.module.css'

const Products = (props) => {
    return <ul className={classes.list}>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
    </ul>
} 
export default Products;