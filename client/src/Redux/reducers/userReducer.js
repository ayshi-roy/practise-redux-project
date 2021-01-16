const { users_request, get_users_success, get_users_failed,remove_user} = require("../Actions/userAction")

const initialState = {
    Loading: false,
    users: [],
    error: ''
    
}

const userReducers = (state = initialState, action) =>{
    switch (action.type){
        case users_request:
            return {
                ...state,
                Loading: true
            }            
        case get_users_success: 
            console.log(action.payload);           
            return {
                ...state,
                Loading: false,
                users: action.payload
                
            }            
        case get_users_failed:
            return {
                ...state,
                Loading: false,
                users: [],
                errors: action.payload
            }
        // case REMOVE_DATA:
        //         console.log(action.id);
        //         const id = action.id;            
        //         const remainData = state.cart.filter(item => item._id !== id); 
        //         return {cart : remainData}               
        default:
            return state;
    }
}

export default userReducers;