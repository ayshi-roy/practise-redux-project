import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {userList} from '../../../Redux/Actions/FormAction';
import { removeFromData } from '../../../Redux/Actions/FormAction';
import Navbar from '../../Navbar/Navbar';

const Persons = ({userList, users}) => {
    console.log(users);    
    
    // const [person, setPerson] = useState(users);
    // const removeFromData = (id) => {
    //     removeData(id);
    // }

    useEffect(() =>{
        userList()
    },[])
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="container mt-5 pt-5">
                <div className="d-flex justify-content-center">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>                        
                        {/* <tbody>    
                            { users.map((user,index) =>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <th>{user._id}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td><button type="button" onClick={() => removeFromData(user._id)} class="btn btn-outline-danger">Delete</button></td>
                                </tr>
                            )}
                        </tbody> */}
                    </table>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    // Loading: state.Loading,
    users: state.users
    // errors: state.error,
})
// const mapDispatchToProps = {
//     removeFromData: removeFromData    
// }
export default connect(mapStateToProps,{userList})(Persons);