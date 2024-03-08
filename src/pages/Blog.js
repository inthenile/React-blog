import { useParams, useNavigate} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import EditBlog from "../layouts/EditBlog";


const Blog = () => {
    const navigate = useNavigate();
    
    const {blogId} = useParams();
    const {blogs: blog, loading, error} = useFetch(`http://localhost:8000/blogs/${blogId}`);
    const [editing, setEditing] = useState(false);
    const requestParameters = {
        method: "DELETE",
    }

    const handleDelete = () =>{
        if(window.confirm("Do you really want to delete this blog?")){
            fetch(`http://localhost:8000/blogs/${blogId}`, requestParameters)
            alert(`${blog.title} successfully deleted`)
            navigate("/")
        } 
    }
    
    //this will return the full body of the blog text with an option to delete/edit it.
    return ( 
        <>
            {!editing &&
            <>
                {loading && !error && <p style={{textAlign:"center"}}>"The blog post is being loaded"</p>}
                {!loading && error && <p style={{textAlign:"center"}}>"There was an error. Please try again"</p>}
                {!loading && !error && blog &&
                
                <div className="blog-div">
                    <span className="edit-blog" onClick={() => {setEditing(true)}}> Edit blog </span>
                    <h1 className="blog-title">{blog.title}</h1>
                    <p className="blog-body">{blog.body}</p>
                    <span className="delete-blog" onClick={handleDelete}>Delete blog</span>
                </div>
            }
            </>
        }
        {editing && <EditBlog blog={blog} setEditing={setEditing}/>}
        </>
     );
}
 
export default Blog;