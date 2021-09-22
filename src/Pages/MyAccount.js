import React from 'react'

export const MyAccount = ({user}) => {
 const day = new Date().getDate()
 const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
 const date = new Date()
 const month = months[date.getMonth()]
 const year = new Date().getFullYear()

return(
  <div>
    <h3>MyAccount Page</h3>
    <div>User: {user.UserId}            
     <p>Current Balance: ${user.UserBalance } </p>   
    </div>
     
    <table className='table'>
      <thead>
      <tr>
        <th scope="col">Event</th>
        <th scope="col">Item</th>
        <th scope="col">Date</th>
        <th scope="col">Tokens</th>
        <th scope="col">Token Balance</th>
      </tr>
      </thead>
    <tbody>
      <tr>
        <td>Opening Balance</td>
        <td></td>
        <td>{day} {month} {year}</td>
        <td></td>
        <td>${user.UserBalance }</td>  
      </tr>
    </tbody>
  </table>

</div>

)

}

export default MyAccount