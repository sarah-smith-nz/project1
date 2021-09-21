import React, {useState, useEffect} from 'react'
import useFetch from "../Services/useFetchHook";
import {API} from '../Services/API'
import UserService from "../Services/UserService";
import { Link } from "react-router-dom";


export const AllUsers = () => {
   const [list, setList] = useState([]);
   const apiData = useFetch(API.API_URL+'user');
   const [isLoaded, setIsLoaded] = useState(false)
 
  useEffect(()=>{
    if(isLoaded == false && apiData !== null && apiData.data !== null) {
    setList(apiData.data)
    setIsLoaded(true)
    console.log("List updated from API data")
  }
    console.log("useEffect:", apiData)
  },[apiData, isLoaded])

  const [editUser, setEditUser] = useState([])
  
  function handleDelete(id) {
    UserService.deleteUser(id) 
    .then(
      response => {
      alert(response.data)
      const newList = list.filter(content => content.UserId !== id)
      setList(newList)
      })
    return setList
  }

  function handleEditClick(username) {
    UserService.getEditUser(username)   
    .then(
      response => {
        console.log("edit user", response)
        setEditUser(response.data)
      }
    )
  }

  function handleEditFormChange(evt) {
    const value = evt.target.value;
    setEditUser({
      ...editUser,
      [evt.target.name]: value
    });
  }
  

  function handleSubmit() { 
    console.log("submit:", editUser)
     
    UserService.updateUser(editUser) 
    .then(
      response => {
      console.log("Edited")
      alert(response.data)
      })
      const newList = list.map((item) => {
        console.log("ItemUserid:", item.UserId, "edituserId:", editUser.UserId)
        if (item.UserId === editUser.UserId) {
         console.log("Found")
          return editUser;
        }
   
        return item;
      });
   
      setList(newList);
   
    
    return setList
  }
  

  return (
    <div>
  
   
    <div >
       <h6>Add New User <Link to="/register"><svg  xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
              </svg>  </Link>  
          </h6>
      <table className='table'>
      <thead>
  <tr>
    <th scope="col">User Id</th>
    <th scope="col">User Name</th>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Token Balance</th>
  </tr>
  </thead>
  <tbody>
  
  {list.map(x => (
        <tr key={x.UserId} >
          <td>{x.UserId}</td>
          <td>{x.UserName}</td>
          <td>{x.FirstName}</td>
          <td>{x.LastName}</td>
          <td>{x.UserBalance }</td>
          {/* delete icon */}
          <td>
          <button type="button" className="btn btn-light mr-1" value={x.UserId} onClick={() => handleDelete(x.UserId)} >
          <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
         </svg>  
          </button>
              </td>

         {/* edit icon */}
          <td> 
          <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                 value={x.UserId} 
                 onClick={() => handleEditClick(x.UserName)}>
                   <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
          </button></td>
        </tr>
      ))}
   
    </tbody>
  </table>
  
    <div>
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
          <h5 className="modal-title">Edit User</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
          ></button>
      </div>

      <div className="modal-body">
        <div className="flex-row bd-highlight mb-3">
        
        <div className="p-2 w-50 bd-highlight">
      
        <div className="input-group mb-3">
        <span className="input-group-text">User ID: {editUser.UserId}</span>
        <input type="hidden" className="form-control"
        name='UserId'
        value={editUser.UserId}
        />
    </div>
    <div className="input-group mb-3">
        <span className="input-group-text">First Name</span>
        <input type="text" className="form-control"
        name='FirstName'
        value={editUser.FirstName}
        onChange={handleEditFormChange}/>

    </div>

    <div className="input-group mb-3">
        <span className="input-group-text">Last Name</span>
        <input type="text" className="form-control"
        name='LastName'
        value={editUser.LastName}
        onChange={handleEditFormChange}/>
        
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text">User Name</span>
        <input type="text" className="form-control"
        name='UserName'
        value={editUser.UserName}
        onChange={handleEditFormChange}/>
      
    </div>
    <div className="input-group mb-3">
        <span className="input-group-text">User Balance</span>
        <input type="text" className="form-control"
        name='UserBalance'
        value={editUser.UserBalance}
        onChange={handleEditFormChange}
        />
    </div>
    <div className="input-group mb-3">
        <span className="input-group-text">Password</span>
        <input type="text" className="form-control"
        name='Password'
        value={editUser.Password}
        />
    </div>
    <div className="input-group mb-3">
        <span className="input-group-text">Role</span>
        <select type="text" className="form-control"
        name='Role'
        value={editUser.Role}
        onChange={handleEditFormChange} >
        <option value="guest">Guest</option>
        <option value="admin">Admin</option>
        </select>        
    </div>
    <button onClick={handleSubmit}>Submit edits</button>


 </div>
 
</div>


   
           
          
            
      </div>
      </div>
      </div>       
          
            
      </div>
      </div>

</div>
</div>
);
}
 
export default AllUsers;
