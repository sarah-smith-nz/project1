import React, { useState, useEffect } from "react";
import useFetch from "../Services/useFetchHook";
import {API} from '../Services/API'
import MyAccount from "./MyAccount";
import AuthService from "../Services/AuthService";
import NoAccess from "./NoAccess";
import { Redirect } from "react-router";

export function Profile(props) {

  // const [currentUser, setCurrentUser] = useState([])
  // const [showProfilePage, setShowProfilePage] = useState(false)

  
const currentUser = (AuthService.getCurrentUser())

// console.log("currentuser:", currentUser)
//   if (currentUser === [] || currentUser == null) {
  
//     <Redirect to="/login" />}else{
//       setShowProfilePage(
//        true)
//       };

  const { error, isPending, data: user } = useFetch(API.API_URL+'user/' + currentUser.UserName)


  return (
<div> 
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.UserName}'s</strong> Profile
          </h3>
        </header>
        <div >
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { user && <MyAccount user={user} /> }
        </div>
     
      </div>
</div>
  )
}

export default Profile 
