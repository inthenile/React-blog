import { useEffect, useState } from "react"

export default function useSingleFetch(url){

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(()=>{
        fetch(url)
            .then((res)=>{
                if (res.ok) {
                    setLoading(true)
                    return res.json();
                } else {
                    throw new Error("Couldn't fetch the blog")
                }
            })
            .then((data)=>{
                //artificial loading time to represent real life fetch situations
                setTimeout(() => {
                setBlog(data)
                setError(false)
                setLoading(false)
            }, 1000);

            })
            .catch((e) =>{
                console.log(e);
                setError(true)
            })

            return;
    }, [url])



    return {blog, loading, error}
}