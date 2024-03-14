import { useMemo } from "react";

const Search = ({setQuery}) => {

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
        setQuery(e.target.value);
    },150)
    ,[setQuery]);

    return ( 
        <div className="search-input">
        <input id="search" className="searchbar"
        type="text"
        placeholder="Write a blog's title"
        onChange={handleSearch}
        />
        </div>

     );
}
 
export default Search;  