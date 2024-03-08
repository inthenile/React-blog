import {Link} from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found-error">
            <p>This page does not exist.</p>
            <Link to="/" ><p className="homelink">Return Home</p></Link>
        </div>
     );
}
 
export default NotFound;