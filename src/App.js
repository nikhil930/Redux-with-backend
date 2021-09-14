import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'
import {useSelector , useDispatch} from 'react-redux';
import {notifyAction} from './store/index'
import { useEffect } from 'react/cjs/react.development';

let initialRender = true;

function App() {

const dispatch = useDispatch();
const items = useSelector(state=> state.changeItem.items);
const show = useSelector(state=>state.uiChange.isShowing);
const notification =useSelector(state => state.uiChange.notification)

useEffect(()=>{
  
  const fetchData = async ()=>{
    dispatch(notifyAction.notifyChange({
      status:'Loading',
      title:'Loading....',
      message:'Sending Data . . . '
    }))
  const response = await fetch('https://react-http-8d93b-default-rtdb.firebaseio.com/cart.json', {
    method:'PUT',
    body:JSON.stringify(items)
  })
  if(!response.ok)
  {
    throw new Error ('Something went wrong');
  }
  dispatch(notifyAction.notifyChange({
    status:'Success',
    title:'Success',
    message:'Sent Data'
  }))
}
if(initialRender)
{
  initialRender=false;
  return;
}
fetchData().catch(err=>{
  if(err){
  dispatch(notifyAction.notifyChange({
    status:'Failure',
    title:'Error',
    message:'Sending Data Failed !!!'
  }))
}
}
)
console.log(show);
}, [items , dispatch])


  return (
    <>
    {show && <Notification 
    status={notification.status}
    title={notification.title}
    message={notification.message}
     />}
    <Layout>
      <Cart />
      <Products />
    </Layout>
    </>
  );
}

export default App;
