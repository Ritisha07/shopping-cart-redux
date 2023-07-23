import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItem = useSelector((state) => state.cartReducer.cartItem);
  console.log('cart item:', cartItem);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItem.map((item) => (
        <div key={item.id}>
          <ul>
            <CartItem item={{ title: item.title, quantity: item.quantity, total: item.price * item.quantity, price: item.price }} />
          </ul>
        </div>
      ))}
    </Card>
  );
};

export default Cart;
