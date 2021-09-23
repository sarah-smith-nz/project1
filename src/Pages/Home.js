import React,{Component} from 'react';
//import UserService from "../Services/user.service";

export class Home extends Component {


    render(){
        return(
            <div>
            <div className='d-flex justify-items-center m-3'>
                <h3>This is Home page</h3>
                 </div>
                 <div className="container">
        <header className="jumbotron">
          {/* <h3>{this.state.content}</h3> */}
        </header>
      </div>
         <div className='d-flex justify-items-center m-3'> 
        <img src="./images/Kahikatea.jpg" alt="kahikatea tree"/>
        
         </div>
         <div className='d-flex justify-items-center m-3'> 
        <a href='/products' >Go to Products</a>
        </div>
           </div>
        )
    }
}

export default Home