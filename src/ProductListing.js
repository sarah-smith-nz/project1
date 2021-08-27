import { Link } from 'react-router-dom';
import {variables} from './Variables'

export const ProductListing = ({ product }) => {
  let  PhotoPath = variables.PHOTO_URL
  let PhotoFileName ="testproduct.png"

  return (
    <div >
      {product.map(pro => (
        <div key={pro.ProductId} >
          <Link to={`/product/${pro.ProductId}`}>
            <h2>{ pro.ProductName }</h2>
            <img width="250px" height="250px"src={PhotoPath+PhotoFileName} alt="product"/>
            <p>Product Details {pro.ProductDetails }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ProductListing;
