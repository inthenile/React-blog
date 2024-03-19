import Blogs from "../layouts/Blogs";
import { useState } from "react";
import Search from "../layouts/Search";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const [showSearch, setShowSearch] = useState(false);
    const {allBlogs, blogs, loading, error, endOfResults, fetching } = useFetch("http://localhost:8000/blogs", showSearch);

    const handleActivateSearch = () => {
        setShowSearch(!showSearch)
    }

const SearchWrapper = () => {
    return (
    <>
        <div className="search-wrapper">
            <div className="search-container " onClick={handleActivateSearch}>
                <div className="search"></div>
            </div>
        </div>
        <>
        {showSearch && <Search allBlogs={allBlogs} showSearch={showSearch}/>} 
        </>
    </>
    )
}

const BlogsWrapper = () => {
    return (
        <div className="blogs-wrapper">
            {error && <div style={{textAlign:"center", color: "#55c0b2"}}>Could not fetch data from the server</div> }
            {!error && loading && <div className="blog-loading" style={{textAlign:"center",  color: "#55c0b2"}}> Fetching blog entries... </div>}
            {!error && blogs && <Blogs blogs={blogs} loading={loading}/>}
            {!loading && !error && fetching && <h1 style={ {color: "#55c0b2", textAlign:"center"}}  >Loading more blogs...</h1>}
            {!loading && !error && !fetching && endOfResults && <h1 style={ {color: "#55c0b2", textAlign:"center" }}>End of results</h1>}
        </div>
    )
}

    return ( 
        <div className="home">
            <SearchWrapper />
            {!showSearch && <BlogsWrapper />}
        </div>
     );
}

export default Home;