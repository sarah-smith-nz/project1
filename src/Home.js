import React,{Component} from 'react';

export class Home extends Component{
    render(){
        return(
            <div>
            <div className='d-flex justify-items-center m-3'>
                <h3>This is Home page</h3>
                 </div>
                
         <div className='d-flex justify-items-center m-3'> 
        <img src="./images/Kahikatea.jpg" alt="kahikatea tree"/>
        
         </div>
         <div className='d-flex justify-items-center m-3'> 
        <a to='/products' >Go to Products</a>
        </div>
           </div>
        )
    }
}

