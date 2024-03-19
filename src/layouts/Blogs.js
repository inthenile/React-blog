import { Link } from "react-router-dom";

const Blogs = ( {blogs, loading, showSearch} ) => {
    
    return ( 
        <>
        {!loading && !showSearch && blogs?.length === 0 && <h1 style={ {color: "#55c0b2", textAlign:"center"}}>There are no blog entries yet.</h1>}
        {!loading && showSearch && blogs.length === 0 && <h1 style={ {color: "#55c0b2", textAlign:"center"}}>No results found</h1>}
        {blogs?.length > 0 &&
        <div className="blogs">
            {blogs
                .map((blog) => (
                    <Link to={`blog/${blog.id}`} className="blogInfo" key={blog.id}>
                        <h1>{blog.title}</h1>
                        <p>{blog.body.slice(0,300)} . . . </p>
                        <br />
                        <strong><p className="clickToRead">Click to read the entire blog</p></strong>
                        <br/>
                    </Link>
                ))
            }
        </div>
            }
        </>
     );
}
 
export default Blogs;