import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cartAction } from '../../store';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleCart = (event) => dispatch(cartAction.toggleCart());

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
