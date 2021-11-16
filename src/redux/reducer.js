const initialState = {
    basket:{
        products:[]
    }
};
const basketReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_PRODUCT": let isExists = false; 
        let updateState = state.basket.products.map((itm,idx)=>{
            if(itm.name === action.payload.name){
                itm.quantity = itm.quantity+1;
                isExists = true;
            }
            return itm
        }) 
        if(isExists){
            return{
            ...state,
            basket:{
                products:[...updateState]
            }}
        }else{
           return {basket:{products:[...state.basket.products,action.payload]}}
        }
        case "REMOVE_PRODUCT": 
        let isExists2 = false; 
        
        let updateState2 = state.basket.products.map((itm,idx,arr)=>{
            if(itm.id == action.payload){
                if(itm.quantity > 1){
                    itm.quantity = itm.quantity-1;
                    isExists2 = true;
                }
            }
            return itm
        })
        if(isExists2){
          return  {...state,
                basket:{
                    products:[...updateState2]
                }
            }
           
        }else{
            return {...state, basket:{
            products:state.basket.products.filter((itm)=>{
                return itm.id !== action.payload
            })
        }}}

        default: return state
    }
}   

export default basketReducer;