import classes from './CartItem.module.css';
import { useDispatch , useSelector } from 'react-redux'
import { changeActions } from '../../store';

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  // const items = useSelector((state)=>state.addItem.items);
  // console.log(item);
  const { id , title , price , amount:quantity, } = item;
  const total = quantity*price;
  // const titleN=useSelector((state)=>state.addItem.items);
  // console.log(title);
  const eventClickedHandler = () =>{
    // console.log(title);
    dispatch(changeActions.removeFromCart({id}));
  }

  const eventClickHandler = ()=>{
    dispatch(changeActions.addToCart(item));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
          onClick={eventClickedHandler}>-</button>
          <button onClick={eventClickHandler} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
