import { Link } from 'react-router-dom';
import {API} from '../Services/API'


export const ProductListing = ({ product , error, isPending }) => {
    let  PhotoPath = API.PHOTO_URL
  let PhotoFileName ="testproduct.png"



  return (
    <div >
      { error && <div>You need to log in to see our products 
        <Link to="/login"> Log in </Link> now or 
        <Link to ="register">Register</Link></div> }
      { isPending && <div>Loading...</div> }
      {product.map(pro => (
        <div key={pro.ProductId} >
          <Link to={`/product/${pro.ProductId}`} key={pro.ProductId} product={pro}>
            <h2>{ pro.ProductName }</h2>
            <img width="250px" height="250px"src={PhotoPath+PhotoFileName} alt="product"/>
            <p>Product Details {pro.ProductDetails } </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

 
export default ProductListing;
