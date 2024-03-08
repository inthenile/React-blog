import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url) //pass in any valid api endpoint while invoking useFetch()
            .then((response) => {
                if(response.ok){
                    setError(null)
                    return response.json()
                } else {
                    throw new Error("Could not fetch the data")
                }
            })
            .then((data) =>{
                setBlogs(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
                setError(err)
            })
    }, [url])

return {blogs, loading, error};

}

export default useFetch;