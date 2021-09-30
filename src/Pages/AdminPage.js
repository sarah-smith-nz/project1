import React, { useEffect, useState } from "react"
import EditUsers from "../Components/EditUsers"
import EditProducts from "../Components/EditProducts"
import AuthService from "../Services/AuthService"
import NoAccess from "./NoAccess"

export function AdminPage (props) {
  const [showUsers, setShowUsers] = useState(false);
  const [UsersText, setUsersText] = useState("Show all Users")
  const [showProds, setShowProds] = useState(false);
  const [ProdsText, setProdsText] = useState("Show all Products")

  const [showAdminPage, setShowAdminPage] = useState(false)
  useEffect(() =>{ 
    const user = AuthService.getCurrentUser();
    if (user) {
      setShowAdminPage(
       user.Role.includes("admin"))
      }} ,[])
 
  
 
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>This is Admin Page</h3>
        </header> 
         {showAdminPage ?  ( 
           <div>  
          <div >
            
        {showUsers ? (
         <EditUsers /> 
        ) : null}
        <button onClick={() => {setShowUsers(!showUsers); setUsersText("Hide all Users")}}> {UsersText} </button>
        </div>
        <div >
        {showProds ? (
         <EditProducts /> 
        ) : null}
        <button onClick={() => {setShowProds(!showProds); setProdsText("Hide all Products")}}> {ProdsText} </button>
        </div>
        </div>)
:<div>{<NoAccess />}</div>}
        
      </div>
    );
  }
 

export default AdminPage