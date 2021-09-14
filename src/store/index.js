import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialStateItem= {
        items:[]
}

const changeItem = createSlice({
    name:'addToCart',
    initialState:initialStateItem,
    reducers:{
        addToCart(state , action){
            // console.log(state.items);
             const e=state.items.find((element  ,index)=>{
                // console.log(element.title);
             return element.title===action.payload.title});
            // console.log(e);
            if(e)
            {
                // console.log('*');
                e.amount++;
            }
            else
            {
                state.items=[...state.items , action.payload];
                // console.log(state.items);
            }
        },
        removeFromCart(state ,action){
            const y=state.items.find((element  ,index)=>{
                // console.log(element.title);
             return element.id===action.payload.id});
            
                if(y.amount===1)
                {
                    const r=state.items.findIndex((element)=>{
                        return element.title===action.payload.title ;
                    })
                   state.items.splice(r,1);
                }
                else
                {
                    y.amount--;
                }
    }

    }

})

const uiChange = createSlice({
    name:'change-ui',
    initialState:{ notification:null , isShowing:false },
    reducers:{
        notifyChange(state , action){
            state.notification={
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }
            state.isShowing=true;
        }
    }
})


export const changeActions=changeItem.actions;
export const notifyAction = uiChange.actions;
const store = configureStore({
    reducer:{changeItem:changeItem.reducer, uiChange:uiChange.reducer}
})

export default store;