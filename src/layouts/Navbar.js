import { NavLink, Link } from "react-router-dom";

const Navbar = () => {

    return ( 
        <div className="nav">
                <h1 ><Link to="/" className="title">inthenile blog</Link></h1>
            <div className="navlinks">
                <NavLink to="/">Home</NavLink>
                <NavLink to="create">New Blog</NavLink>
            </div>
        </div>
     );
}
 
export default Navbar;