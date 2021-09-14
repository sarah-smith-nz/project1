import React, { useState, useEffect } from "react";
import useFetch from "../Services/useFetch";
import {variables} from '../Services/Variables'
import MyAccount from "../Pages/MyAccount";
import AuthService from "../Services/auth-service";

export function Profile(props) {

  const [currentUser, setCurrentUser] = useState([])
  // const [userProfile, setUserProfile] = useState([])
  console.log("currentUser:", currentUser)
  // console.log("userProfile:", userProfile)

  useEffect(()=>{
      setCurrentUser(AuthService.getCurrentUser())
    },[])

  // const handleUserClick = () => {
  //   setUserProfile(AuthService.getMyProfile(currentUser.UserName))
  // }
  // console.log("username:", currentUser.UserName)
  const { error, isPending, data: user } = useFetch(variables.API_URL+'user/' + currentUser.UserName)


  

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
     
        {/* <div>
          <h4>My Account</h4>
          <button onClick={handleUserClick}>Show Account</button>
        </div> */}
      </div>
</>
  )
}

export default Profile 
