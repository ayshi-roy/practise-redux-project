// import axios from 'axios';

// export const users_request = 'Users_Request';
// export const get_users_success = 'get_users_success';
// export const get_users_failed = 'get_users_failed';
// export const remove_user = 'remove_user';



// export const userList = () => 
//     async (dispatch) => {
//         try{
//             dispatch({
//                 type: users_request
//             })
//             const res = await axios.get('http://localhost:5000/allUser')
//             console.log(res.data)
//             dispatch({
//                 type: get_users_success,
//                 payload: res.data
//             })
//         }
//         catch(error){
//             dispatch({
//                 type: get_users_failed,
//                 payload: error.message
//             })
//         }
//     }
// export const removeData = (id) => 
//     async (dispatch) => {
//         try{
//             await axios.delete(`http://localhost:5000/delete/${id}`)
//         dispatch({
//             type: remove_user,
//             payload: id
//         })
//         }
//         catch(error){
//             dispatch({
//                 type: get_users_failed,
//                 payload: error.message
//             })
//         }
        
//     }
