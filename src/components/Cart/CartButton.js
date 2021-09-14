import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react/cjs/react.development';

const CartButton = (props) => {

  const items = useSelector((state)=>state.changeItem.items);
  let sum=0;
  for(let i=0;i<items.length;i++)
  {
    sum+=items[i].amount;
  }
  // useEffect(()=>{
  //   requestAnimationFrame(animate);
  // },[items])
  // console.log()
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{sum}</span>
    </button>
  );
};

export default CartButton;
