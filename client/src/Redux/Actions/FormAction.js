import Swal from 'sweetalert2';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content';
export const ADD_USER = 'ADD_USER';
export const REMOVE_DATA = 'REMOVE_DATA';
export const GET_DATA = 'GET_DATA';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';



const MySwal = withReactContent(Swal);

export const addUser = (data, e) => {
  return(dispatch) => {
    axios.post('http://localhost:5000/fillUpData',data)
    .then(res => {
      console.log(res)      
      dispatch({
        type: ADD_USER,
        payload: res.data
    });
    
  })     
    e.target.reset()               
    
  }
}

  export const userList = () => {
    return(dispatch) => {
      axios.get('http://localhost:5000/allUser')
      .then(res => {
        console.log(res.data.data)      
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: res.data.data
      });
      
    })
    }
  }

    // fetch('http://localhost:5000/fillUpData',{
    //         method: 'POST',
    //         headers: {'content-type': 'application/json'},
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(success => {
    //         if (success){
    //             MySwal.fire({
    //                 title: <p>Your Information Submitted Successfully</p>,
    //                 footer: 'Copyright 2018',
    //                 didOpen: () => {
    //                   // `MySwal` is a subclass of `Swal`
    //                   //   with all the same instance & static methods
    //                   MySwal.clickConfirm()
    //                 }
    //               }).then(() => {
    //                 return MySwal.fire(<p>Your Information Submitted Successfully</p>)
    //               })
    //         }
    //     })
    //     e.target.reset()
    // return {type: ADD_USER, data}
// }

export const removeFromData = id => {

  return(dispatch) => {
    axios.delete(`http://localhost:5000/delete/${id}`)
    .then(res => {
      console.log(res)      
      dispatch({
        type: REMOVE_DATA,
        payload: id
    })
    .catch(err => {
      console.log(err)
    })
    
  })     
    
                
    
  }
    // fetch(`http://localhost:5000/delete/${id}`,{
    //   method: 'DELETE'
    // })
    // .then(res => res.json())
    // .then(result => {
    //    if(result){
    //       alert('result');
    //    } 
    // })   
    // return {type: REMOVE_DATA, id}
}

export const getData = () =>{
  fetch('http://localhost:5000/allUser')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    return {type: GET_DATA, data}
  })
}