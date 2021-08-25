import React,{Component} from 'react';
import {variables} from './Variables.js';

export class Product extends Component{
  
  constructor(props){
    super(props);

    this.state={
        products:[],
        PhotoPath:variables.PHOTO_URL,
        PhotoFileName:"testproduct.png"
    }}

    refreshList(){
        fetch(variables.API_URL+'product')
        .then(response=>response.json())
        .then(data=>{
            this.setState({products:data});            
        });
        
    }

    componentDidMount(){
        this.refreshList();
    }

render() {

  const {
    products,
    PhotoPath,
    PhotoFileName
    }=this.state;

  return(
 <div>
   <table className="table table-striped"> 
     <thead>
       <tr>
         <th></th>
       <th>ProductId</th> 
       <th>ProductName</th>
       </tr>
       </thead>
    <tbody>
      
   {products.map(pro=>
            <tr key={pro.ProductId}>
           <td> <img width="250px" height="250px"src={PhotoPath+PhotoFileName} alt="product"/></td> 
                <td>{pro.ProductName}</td>
                <td>{pro.ProductDetails}</td>
                </tr>)}
                        
</tbody>
</table>
{/* <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="..." alt="Card cap"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
 
</div>  */}
</div>
)}
   }