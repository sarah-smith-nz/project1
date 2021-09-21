import React from "react";
import AllUsers from "../Components/AllUsers";


export function AdminPage (props) {

 
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>This is Admin Board</h3>
         
             
          <div >
          
          { <AllUsers  />}
        </div>
              

        </header>
      </div>
    );
  }
 

export default AdminPage