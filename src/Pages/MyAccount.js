import React from 'react'

export const MyAccount = ({user}) => {

return(
  <div>
    <h3>MyAccount Page</h3>
    <div>UserId {user.UserId} 
          
            {/* <img width="250px" height="250px"src={PhotoPath+PhotoFileName} alt="product"/> */}
            <p>Current Balance {user.UserBalance } </p>
        
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
    <td>21/08/2021</td>
    <td></td>
    <td>{user.UserBalance }</td>

    
    
  </tr>
  <tr>
    <td>Order</td>
    <td>Zoo Pass</td>
    <td>21/08/2021</td>
    <td>33</td>
    <td>267</td>

    
  </tr>
  <tr>
    <td>Closing Balance</td>
    <td></td>
    <td>21/08/2021</td>
    <td></td>
    <td>267</td>
  </tr>
  

  </tbody>
  </table>

  </div>

)

}

export default MyAccount