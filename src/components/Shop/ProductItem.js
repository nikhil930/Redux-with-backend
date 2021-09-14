import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch , useSelector} from 'react-redux';
import { changeActions } from '../../store';

const ProductItem = (props) => {
  const dispatch =useDispatch();

  const { id ,title, price, description } = props;
 const amount=1;

 const items = useSelector((state)=>state.changeItem.items);
//  console.log(items);
  const clickHandler = ()=>{
    // console.log('D');
    dispatch(changeActions.addToCart({id ,title , price , amount }))
    // console.log(items);
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={clickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
