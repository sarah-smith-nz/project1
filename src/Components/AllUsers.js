import React, {useState, useEffect} from 'react'
// import useFetch from "../Services/useFetch";
// import {variables} from '../Services/Variables'
import AuthService from "../Services/auth-service";

export const AllUsers = ({ content }) => {
  const [list, setList] = useState(content);
  console.log("list", list)

  // let [updatedUser, setUpdatedUser] = useState({
  //   UserId: '',
  //   FirstName: '',
  //   LastName: '',
  //   UserName: '',
  //   UserBalance: '',
  //   Password: '',
  //   Role: ''
  // }) 
  // console.log("UpdatedUser:", updatedUser)
  // console.log(updatedUser.FirstName)

  // useEffect(() => {
  //   setList(list)
  //   console.log("useEffect:", list)
  // }, [list]);


  function HandleDelete(id) {
    AuthService.deleteUser(id) 
    .then(
      response => {
      alert(response.data)
      const newList = list.filter(content => content.UserId !== id)
      setList(newList)
      })
    
    
    return setList
  }

  // function HandleClick() {

  // }

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // }
  // }

  // function HandleEdit(props) {
    
    
  //   // const [userid, setUserid] =useState("")
  //   //   const [firstname, setFirstname] = useState("")
  //   //   const [lastname, setLastname] = useState("")
  //   //   const [username, setUsername] = useState("")
  //   //   const [userbalance, setUserbalance] = useState("")
  //   //   const [password, setPassword] = useState("")
  //   //   const [role, setRole] = useState("")
        
  //     //const props = userid, firstname, lastname, username, userbalance, password, role  
      
  //     AuthService.editUser(props) 
  //   .then(
  //     response => {
  //     console.log("Edited")
  //     alert(response.data)
  //     const updatedList = (
  //     setUserid(userid),
  //     setFirstname(firstname),
  //     setLastname(lastname),
  //     setUsername(username),
  //     setUserbalance(userbalance),
  //     setPassword(password),
  //     setRole(role)
  //     )
  //     console.log("updatedList:", updatedList)
  //     setList(updatedList)
  //     })
    
  //   return setList
  // }
  

  return (
    <div >
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
          <button type="button" className="btn btn-light mr-1" value={x.UserId} onClick={() => HandleDelete(x.UserId)} >
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
                 >
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
        <span className="input-group-text">First Name</span>
        <input type="text" className="form-control"
        // value={updatedUser.FirstName}
        // onChange={HandleChange}/>
        />
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text">Last Name</span>
        <input type="text" className="form-control"
        // value={updatedUser.LastName}
        // onChange={HandleChange}/>
        />
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text">User Name</span>
        <input type="text" className="form-control"
        // value={updatedUser.UserName}
        // onChange={HandleChange}/>
        />
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
