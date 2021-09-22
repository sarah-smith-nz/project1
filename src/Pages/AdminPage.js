import React, { useState } from "react"
import EditUsers from "../Components/EditUsers"
import EditProducts from "../Components/EditProducts"

export function AdminPage (props) {
  const [showUsers, setShowUsers] = useState(false);
  const [UsersText, setUsersText] = useState("Show all Users")
  const [showProds, setShowProds] = useState(false);
  const [ProdsText, setProdsText] = useState("Show all Products")

  
 
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>This is Admin Board</h3>
        </header> 
             
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

        
      </div>
    );
  }
 

export default AdminPage