import Blogs from "../layouts/Blogs";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Search from "../layouts/Search";


const Home = () => {

    const {blogs, loading, error } = useFetch("http://localhost:8000/blogs");
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false)

    const handleSearch = () => {
        setShowSearch(!showSearch)
        setQuery(""); //reset the query if user minimizes search bar
    }

    return ( 
        <div className="home">
            {error && <div style={{textAlign:"center"}}>Could not fetch data from the server</div> }
            {!error && loading && <div style={{textAlign:"center"}}> Fetching blog entries... </div>}
            {!error && blogs && 
                <div className="search-container">
                    <p className="search" onClick={handleSearch}>Search</p>
                    {showSearch && <Search blogs={blogs} query={query} setQuery={setQuery}/>}
                </div>
            }
            {!error && blogs && <Blogs blogs={blogs} query={query}/>}
        </div>
     );
}
 
export default Home;