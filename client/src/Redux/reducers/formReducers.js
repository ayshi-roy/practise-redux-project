const { REMOVE_DATA, GET_DATA,GET_USERS_SUCCESS } = require("../Actions/FormAction");
// const { users_request, GET_USERS_SUCCESS, get_users_failed,remove_user} = require("../Actions/userAction")

// const initialState = {
//     cart: [],
    
// }
const initialState = {
    users: []
       
}

const formReducers = (state = initialState, action) =>{
    switch (action.type){
        // case GET_DATA:
        //     console.log(action) 
        //     const newData = action.data;            
        //     // const newCart = [...state.cart, newData];
        //     return {cart : newData};
        case GET_USERS_SUCCESS: 
        console.log(action.payload);                      
            return {
                ...state,                                
                users: action.payload                
            }    
        // case REMOVE_DATA:
        //     console.log(action.id);
        //     const id = action.id;            
        //     const remainData = state.cart.filter(item => item._id !== id); 
        //     return {cart : remainData}   
        default:
            return state;
    }
}

export default formReducers;