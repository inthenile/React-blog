import {  useMemo, useState } from "react";
import Blogs from "./Blogs";

const Search = ({ allBlogs, showSearch}) => {

    const [query, setQuery] = useState("");
    //REF - https://www.joshwcomeau.com/snippets/javascript/debounce/
    //prevent the search sending too many requests with each key stroke
    const debounce = (callback, wait) => {
      let timeoutId = null;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback.apply(null, args);
        }, wait);
      };
    }

    const handleSearch = useMemo(()=> debounce ((e) => {
        let searchInput = e.target.value.toLowerCase();
        setQuery(searchInput);
      }, 150)
      ,[]);

    const filteredBlogs = allBlogs.filter((blog) => {
        if(query === ""){
            return blog;
        } else {
            return blog.title.toLowerCase().startsWith(query);
        }
    })


    const SearchResult = () => {
      return(
        <Blogs blogs={filteredBlogs} showSearch={showSearch}/>
      )
    }
    return ( 
        <>
        <div className="search-input">
            <input id="search" className="searchbar"
            name="mySearchBar"
            type="text"
            placeholder="Write a blog's title"
            onChange={handleSearch}
        />
        </div>
        <SearchResult/>
      </>
     );
}
 
export default Search;  