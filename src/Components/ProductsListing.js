import { Link } from 'react-router-dom';
import {API} from '../Services/API'
import './ProductsListing.css'

export const ProductsListing = ({ product , error, isPending }) => {
    let  PhotoPath = API.PHOTO_URL
  let PhotoFileName ="testproduct.png"



  return (
    <div >
      { error && <div>You need to log in to see our products 
        <Link to="/login"> Log in </Link> now or 
        <Link to ="register">Register</Link></div> }
      { isPending && <div>Loading...</div> }
      <div className="row">
      {product.map(pro => (
        <div className="Productcolumns card bg-light" style={{width: "18rem"}}>
          <div className="card" >
        <div key={pro.ProductId} className="card-body">
          <Link to={`/product/${pro.ProductId}`} key={pro.ProductId} product={pro}>
          <img className="card-img-top" width="250px" height="250px"src={PhotoPath+PhotoFileName} alt="product"/>
            <h2  className="card-title">{ pro.ProductName }</h2>
            <p className="card-text">Product Details {pro.ProductDetails } </p>
          </Link>
        </div>
        </div>
         </div>
      ))}
   </div>
    </div>
  );
}

 
export default ProductsListing;
