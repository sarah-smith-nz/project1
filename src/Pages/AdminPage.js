import React, { useState } from "react"
import AllUsers from "../Components/AllUsers"

export function AdminPage (props) {
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState("Show all Users")
  
 
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>This is Admin Board</h3>
         
             
          <div >
          {/* <p>Show state: {show}</p> */}
        {show ? (
         <AllUsers /> 
        ) : null}
        <button onClick={() => {setShow(!show); setBtnText("Hide all Users")}}> {btnText} </button>
        </div>

        </header>
      </div>
    );
  }
 

export default AdminPage