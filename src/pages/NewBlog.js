import {useState } from "react";
import {useNavigate} from "react-router-dom"
const NewBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body};
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }

    if (title.length !== 0 && body.length !== 0) {
        fetch("http://localhost:8000/blogs", requestOptions)
            .then(() =>{
                console.log("blog posted");
                navigate(`/`)
            })
        }
        else{
            alert("Title or the body cannot be empty")
        }
    }

    return ( 
        <div className="create-blog">
            <h1>Create new blog</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="blog-title">Title:</label>
                <input 
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                type="text" name="blog-title" id="blog-title"
                required={true}
                maxLength={100}
                minLength={2}
                placeholder="Blog title"/>

                <label htmlFor="blog-body">New Blog:</label>
                <textarea
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                name="blog-body" id="blog-body" cols="30" rows="10"
                required={true}
                minLength={2}
                placeholder="Your new amazing blog post!"></textarea>
                <button type="submit" >Create</button>
            </form>
        </div>
     );
}
 
export default NewBlog;