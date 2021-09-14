import {useDispatch , useSelector} from 'react-redux'
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const items = useSelector((state)=>state.changeItem.items);
  // console.log(items[0].title);
  // console.log(item)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {items.map((item)=>
      <ul>
      <CartItem item={item} />
      </ul>)}
    </Card>
  );
};

export default Cart;
