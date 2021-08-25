import React,{Component} from 'react';
import {variables} from './Variables.js';

export class ProductListing extends Component{
  constructor(props){
    super(props);

    this.state={
        product:[],
        PhotoPath:variables.PHOTO_URL,
        PhotoFileName:"testproduct.png",
      
    }}
//Consume API from specific ID of Product api/product/id
    refreshList(props){
        fetch('https://localhost:44396/api/product')
        .then(response=>response.json())
        .then(data=>{
            this.setState({product:data});            
        });
        
    }

    componentDidMount(){
        this.refreshList();
    }

  render(){
    const {
      product,
      PhotoPath,
      PhotoFileName
      }=this.state;

    return(
  <div>
    <h3>Product item page</h3> 
    {console.log(product)}
    {/* {product.map(pro=>
            <tr key={pro.ProductId}>
           <td> <img width="250px" height="250px"src={PhotoPath+PhotoFileName} alt="product"/></td> 
                <td>{pro.ProductName}</td>
                <td>{pro.ProductDetails}</td>
                </tr>)} */}
  </div>
)
  
  }
  
}