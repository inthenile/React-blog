import { useState } from "react";

const EditBlog = ({blog, setEditing}) => {


    const [title, setTitle] = useState(blog.title);
    const [body,setBody] = useState(blog.body);


    const handleEdit = (e) =>{
        blog.title = title;
        blog.body = body;

        const fetchOptions = {
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }

        if(blog.title.length !== 0 && blog.body.length !== 0){

            e.preventDefault();
            fetch(`http://localhost:8000/blogs/${blog.id}`, fetchOptions)
                .then(console.log("blog edited"))
                setEditing(false);

            } else {
                alert("Title or the body cannot be empty");
            }
    } 
    const handleReset = () =>{ //not necessarily needed since the user can simply go to Home page, but it's always good to have the options
            setTitle(blog.title);
            setBody(blog.body);
        }
    return ( 
        <div className="create-blog">
            <h1>Edit your blog</h1>
            <form>
                <label htmlFor="blog-title">Title:</label>
                <input type="text" name="blog-title" id="blog-title"
                value={title}
                maxLength={100}
                onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="blog-body">Blog:</label>
                <textarea name="blog-body" id="blog-body" cols="30" rows="10"
                value={body}
                onChange={(e) => setBody(e.target.value)}></textarea>
                <button type="button" onClick={handleEdit}>Save</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </form>
        </div>

        );
}
 
export default EditBlog;