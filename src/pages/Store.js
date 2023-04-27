import classes from "./Store.module.css";
import Button from "../components/UI/Button";
import Products from "../components/Products/Products";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    image: "https://ski24.pl/134088-large_default/narty-zjazdowe-meskie-atomic-redster-tr-atomic-x12-z-grip-walk.jpg",
    name: "Narty Atomic",
    price: 59.99,
    size: "XS",
    forWhom: "female"
  },
  {
    id: "p2",
    image: "https://ski24.pl/121824-large_default/narty-head-shape-rx-head-pr-11-mbs.jpg",
    name: "Narty HEAD",
    price: 69.99,
    size: "S",
    forWhom: 'male'
  },
  {
    id: "p3",
    image: "https://ski24.pl/122286-large_default/narty-head-shape-rx-head-sx-10.jpg",
    name: "Narty HEAD",
    price: 79.99,
    size: "M",
    forWhom: 'male'
  },
  {
    id: "p4",
    image: "https://ski24.pl/128117-large_default/narty-head.jpg",
    name: "Narty HEAD",
    price: 89.99,
    size: "L",
    forWhom: 'female'
  },
  {
    id: "p5",
    image: "https://ski24.pl/12527-large_default/narty-vlkl-rtm-75-marker-4-motion-10.jpg",
    name: "Narty Völkl",
    price: 99.99,
    size: "XL",
    forWhom: 'female'
  },
  {
    id: "p6",
    image: "https://ski24.pl/123897-large_default/narty-head-supershape-ispeed-head-prd-12-z-grip-walk.jpg",
    name: "Narty HEAD",
    price: 109.99,
    size: "XXL",
    forWhom: 'male'
  },
  {
    id: "p7",
    image: "https://www.projektjunior.pl/14051-large_default/zestaw-narty-head-igs-rd-team-wiazania-evo-9-gw-ac-201920.jpg",
    name: "Narty HEAD",
    price: 119.99,
    size: "XXXL",
    forWhom: 'male'
  },
];

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
        <Products skisList={DUMMY_PRODUCTS}/>
      </section>
    </div>
  );
};
export default StorePage;
