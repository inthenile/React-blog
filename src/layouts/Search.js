const Search = ({query, setQuery}) => {


    return ( 
        <div className="search-input">
        <input id="search" className="searchbar"
        type="text"
        placeholder="Write a blog's title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        </div>

     );
}
 
export default Search;  