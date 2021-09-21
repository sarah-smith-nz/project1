import { Link } from "react-router-dom";

export function NoAccess() {

return(
<div>
<div>You do not have access to this page. Please log in or contact the administrator.<br></br> 
        <Link to="/login"> Log in </Link> <br></br> 
        <Link to ="/contact"> Contact Us</Link></div>
</div>
)
}
export default NoAccess