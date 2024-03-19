import {useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import useInitialFetch from "../hooks/useInitialFetch";

const NewBlog = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [latestBlog, setLatestBlog] = useState(1);
    const [newBlog, setNewBlog] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body};
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }

    if (title.length !== 0 && body.length !== 0) {
        //first fetch creates blog
        fetch("http://localhost:8000/blogs", requestOptions)
            .then(() =>{
                console.log("blog posted");
                setNewBlog(true)
        })
    }
        else{
            alert("Title or the body cannot be empty")
        }
    }

    //here I fetch the blogs, only the first page to reduce the load
    //after that, I can use the ?_start=XX&_end=XX parameter at the end of the fetch request to fetch the latest blog by using the datalength I just grabbed
    //by placing {latestBlog -1 } for the start, and {latestBlog} for the end params.
    //grab the lastBlog that has been added to the list 
    const {lastBlog} = useInitialFetch("http://localhost:8000/blogs");
    useEffect(()=>{ 
        setLatestBlog(lastBlog)            
    },[lastBlog])

    //grab the id of that lastblog and navigate the user there
    useEffect(()=>{
        if(newBlog){
            fetch(`http://localhost:8000/blogs?_start=${latestBlog-1}&_end=${latestBlog}`)
                .then((res) => {
                    return res.json()
                })
                .then((data)=>{
                    navigate(`/blog/${data[0].id}`)
                })
        }
    }, [newBlog, latestBlog, navigate])
    
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