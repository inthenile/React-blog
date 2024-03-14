import Blogs from "../layouts/Blogs";
import { useState } from "react";
import Search from "../layouts/Search";
import useFetch from "../hooks/useFetch";

const Home = () => {

    const {blogs, loading, error, endOfResults, fetching } = useFetch("http://localhost:8000/blogs");

    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false)

    const handleSearch = () => {
        setShowSearch(!showSearch)
        setQuery(""); //reset the query if user minimizes search bar
    }

    return ( 
        <div className="home">
            {!error && blogs && 
                <div className="search-container">
                    <p className="search" onClick={handleSearch}>Search</p>
                    {showSearch && <Search blogs={blogs} setQuery={setQuery}/>}
                </div>
            }
            {error && <div style={{textAlign:"center"}}>Could not fetch data from the server</div> }
            {!error && loading && <div className="blog-loading" style={{textAlign:"center"}}> Fetching blog entries... </div>}

            {!error && blogs && <Blogs blogs={blogs} query={query} loading={loading}/>}
            {!loading && !error && fetching && <h1>Loading more blogs...</h1>}
            {!loading && !error && !fetching && endOfResults && <h1>End of results</h1>}

        </div>
     );
}

export default Home;