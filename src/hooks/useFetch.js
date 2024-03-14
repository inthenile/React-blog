import { useState, useEffect } from "react";
import useInitialFetch from "./useInitialFetch";

const useFetch = (url) => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [fetching, setFetching] = useState(false);
    const [endOfResults, setEndOfResults] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY !== document.documentElement.offsetHeight || fetching === true) {
            return;
        }
        if(currentPage > 1){
            setCurrentPage(currentPage-1);
        }
        if(currentPage === 1){
            setEndOfResults(true);
        }

    }
    //remove event listener when component is unmounted
    useEffect(() =>{
        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener("scroll", handleScroll)}
    })
    //make an initial fetch request to the first page to get the maxPage, in order to be able to make fetch requests starting from the max page which gets 
    //decreased by one each time you scroll down, essentially making it possible to scroll from the latest entries to the older ones
    const maxPage = useInitialFetch(url);
    useEffect(()=>{ //this function is only fired when the maxPage is calculated, and currentPage is set to the maxPage
        setCurrentPage(maxPage)
    },[maxPage])

    //fetch data by scrolling
    useEffect(() => {
        let ignore = false;
        fetch(`${url}?_page=${currentPage}`) //pass in any valid api endpoint while invoking useFetch()
            .then((res) => {
                if(res.ok){
                    setEndOfResults(false);
                    setFetching(true)
                    setError(null)
                    return res.json()
                } else {
                    throw new Error("Could not fetch the data")
                }
            })
            .then((data) =>{
                //emulating real life loading situat
                setTimeout(() => {
        console.log(currentPage);

                    if(ignore === false){
                        setBlogs( prevBlogs => [...prevBlogs,...data.data.reverse() ]);
                        setFetching(false)
                        setLoading(false);
                        }
                }, 2000);

            })
            .catch((err) => {
                setLoading(false)
                setError(err)
            })
            return () => {
                ignore = true;
            }
    }, [currentPage, url])


return {blogs, loading, error, endOfResults, fetching};

}

export default useFetch;