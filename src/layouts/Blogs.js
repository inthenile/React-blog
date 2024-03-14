import { Link } from "react-router-dom";

const Blogs = ( {blogs, query, loading} ) => {
    
    

    //check whether the title starts with the query of the user; and return if thats the case
    //I first filter the reversedArray with this function, then map through the filtered blogs
    //and display them to the DOM
    let checkSearch = (blogs) => {
        return blogs.title.toLowerCase().startsWith(query.toLowerCase())
    }

    return ( 
        <>
        {!loading && blogs?.length === 0 && <p>"There are no blog entries yet."</p>}
        {blogs?.length > 0 &&
        <div className="blogs">
            {blogs
                .filter(checkSearch)
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