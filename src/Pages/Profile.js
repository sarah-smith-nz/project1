import React, { useState, useEffect } from "react";
import useFetch from "../Services/useFetchHook";
import {API} from '../Services/API'
import MyAccount from "./MyAccount";
import AuthService from "../Services/AuthService";

export function Profile(props) {

  const [currentUser, setCurrentUser] = useState([])
  console.log("currentUser:", currentUser)

  useEffect(()=>{
      setCurrentUser(AuthService.getCurrentUser())
    },[])


  const { error, isPending, data: user } = useFetch(API.API_URL+'user/' + currentUser.UserName)


  return (
<>
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.UserName}</strong> Profile
          </h3>
        </header>
        <div >
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { user && <MyAccount user={user} /> }
        </div>
     
      </div>
</>
  )
}

export default Profile 
