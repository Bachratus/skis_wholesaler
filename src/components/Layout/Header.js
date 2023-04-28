import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import logoutIcon from '../Icons/logoutIcon.png'
import { Link } from "react-router-dom";
import Modal from '../UI/Modal'
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Cart from "../Cart/Cart";

const Header = (props) => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart())
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to='/home' >Skis Wholesaler</Link>
          <Link to='/home' >SW</Link>
        </div>
        <div className={classes.navigation}>
          <div><Link to='/contact'>Contact</Link></div>
          <div><Link to='/about-us'>About us</Link></div>
          <div><Link to='/store'>Store</Link></div>
        </div>
        <div className={classes.cart}>
          <HeaderCartButton onClick={toggleCartHandler}/>
        </div>
        <div className={classes.logout}>
          <button onClick={props.logoutHander}><img src={logoutIcon} alt=''/></button>
        </div>
      </header>
      {showCart && <Modal onClose={toggleCartHandler}><Cart onClose={toggleCartHandler}/></Modal>}
    </>
  );
};
export default Header;
