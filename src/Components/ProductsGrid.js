import { Link } from 'react-router-dom';
import {API} from '../Services/API'
import { useParams } from "react-router-dom";


export const ProductsGrid = ({ products }) => {
  const { id } = useParams();

    let  PhotoPath = API.PHOTO_URL
  let PhotoFileName ="testproduct.png"

const similarProducts = products.filter(pro => (pro.ProductId != id))

  return (
    <div >
      <h4>Similar Products</h4>
      <div className="card-group">
          {similarProducts.slice(0, 3).map(pro => (
            <div className="card">
                <div key={pro.ProductId}  className="card-body" >
                  <Link to={`/product/${pro.ProductId}`} key={pro.ProductId} product={pro}>
                  <img class="card-img-top" width="250px" height="250px"src={PhotoPath+PhotoFileName} alt="product"/> 
                  <h2 className="card-title">{ pro.ProductName }</h2>           
                  </Link>
                </div>
            </div>  
           ))}
      </div>
    </div>
  );
}
 
export default ProductsGrid;
