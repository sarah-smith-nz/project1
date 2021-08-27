import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {variables} from './Variables'

export const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isPending } = useFetch(variables.API_URL_ID + id);
console.log({product})
  return (
    <div >
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { product && (
        <div>
          <h2>{ product[0].ProductName }</h2>
          <p>Description: { product[0].ProductDescription }</p>
          <div>${ product[0].ProductCost }</div>
          <button>REDEEM</button>
        </div>
      )}
    </div>
  );
}
 
export default ProductDetails;