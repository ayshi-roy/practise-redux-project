import React from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { addUser } from '../../Redux/Actions/FormAction';
// import { addUser } from '../../Redux/Actions/FormAction';
import './Form.css';

const Form = (props) => {
    
    const {addUser,cart} = props;
    console.log(props);
    const { register, errors, handleSubmit } = useForm(); 
    
    const onSubmit = (data, e) =>  {
        addUser(data,e)
    };
      

    return (
        <div className="main mt-5 pt-3">
            <div className="form d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="firstName" placeholder="First Name"className="name" ref={register({ required: true })} />
                    {errors.firstName && "First name is required"}
                    <input name="lastName" placeholder="Last Name"className="name" ref={register({ required: true })} />
                    {errors.lastName && "Last name is required"}
                    <input name="email" placeholder="Email" className="name" ref={register({ required: true })} />
                    {errors.email && "Email is required"}
                    <input name="phone" placeholder="Phone Number" className="name" ref={register({ required: true })} />
                    {errors.phone && "Phone number is required"}
                    <input id="btn" class="login" type="submit" />
                </form>
            </div> 
            <div>
                {
                    cart.map(person =>{
                    return (<li key={person.phone}>{person.firstName}</li>)
                    })
                }
            </div>          
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}
const mapDispatchToProps = {
    
    addUser: addUser,
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);