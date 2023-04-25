import classes from "./Store.module.css";
import Button from "../components/UI/Button";
import Products from "../components/Products/Products";

const StorePage = () => {
  return (
    <div className={classes.container}>
      <section className={classes.filters}>
        <div className={classes.filters}>
          <h1>Filters</h1>
          <h2>Categories</h2>
          <ul>
            <li>
              <span>category 1</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>category 2</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>category 3</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>category 4</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>category 5</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>category 6</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>category 7</span>
              <input type="checkbox" />
            </li>
          </ul>
          <h2>Price</h2>
          <ul>
            <li>
              <span>0zł - 499zł</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>500zł - 999zł</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>1000zł - 1499zł</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>1500zł - 1999zł</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>2000zł +</span>
              <input type="checkbox" />
            </li>
          </ul>
          <h2>Availability</h2>
          <ul>
            <li>
              <span>available</span>
              <input type="checkbox" />
            </li>
            <li>
              <span>not available</span>
              <input type="checkbox" />
            </li>
          </ul>
          <Button isValid={true} text="Filter" />
        </div>
      </section>
      <section className={classes.products}>
        <header>Products:</header>
        {/*<Products/>*/}
        <ul className={classes.products}>
          <li>
            <div className={classes.image}>
              <img src="https://ski24.pl/134088-large_default/narty-zjazdowe-meskie-atomic-redster-tr-atomic-x12-z-grip-walk.jpg" alt=""></img>
            </div>
            <div className={classes.name}>
              <span>product name</span>
            </div>
            <div className={classes.quantity}>
              <div><input type="number" defaultValue={1} min={1} max={5} /></div>
            </div>
            <div className={classes.actions}><div><Button text='Add to cart'/></div></div>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default StorePage;
