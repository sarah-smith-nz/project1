import React, { useState, useEffect } from "react";
import useFetch from "../Services/useFetch";
import {variables} from '../Services/Variables'
import AllUsers from "../Components/AllUsers";

export function BoardAdmin (props) {
  const { error, isPending, data: userContent } = useFetch(variables.API_URL+'user')

  const [content, setContent] = useState([])

  useEffect(()=>{
    setContent(userContent)
  },[])

  console.log("Admin:", userContent)


  

 
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>This is Admin Board</h3>
          <h6>Add New User <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
              </svg>      
          </h6>
             
          <div >
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { userContent && <AllUsers content={userContent} />}
        </div>
              

        </header>
      </div>
    );
  }


export default BoardAdmin