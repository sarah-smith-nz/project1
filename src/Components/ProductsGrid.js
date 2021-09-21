import { Link } from 'react-router-dom';
import {API} from '../Services/API'
import { useParams } from "react-router-dom";


export const ProductGrid = ({ products }) => {
  const { id } = useParams();

    let  PhotoPath = API.PHOTO_URL
  let PhotoFileName ="testproduct.png"

const similarProducts = products.filter(pro => (pro.ProductId != id))

  return (
    <div >

      {similarProducts.map(pro => (
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
 
export default ProductGrid;
