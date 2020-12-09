const { REMOVE_DATA, ADD_USER } = require("../Actions/FormAction");

const initialState = {
    cart: [],
    
}

const formReducers = (state = initialState, action) =>{
    switch (action.type){
        case ADD_USER:
            console.log(action) 
            const newData = action.data;            
            const newCart = [...state.cart, newData];
            return {cart : newCart};
        case REMOVE_DATA:
            console.log(action.id);
            const id = action.id;            
            const remainData = state.cart.filter(item => item._id !== id); 
            return {cart : remainData}   
        default:
            return state;
    }
}

export default formReducers;