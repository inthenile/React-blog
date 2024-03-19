import { useEffect, useState } from "react"


const useInitialFetch = (url) => {

    const [maxPage, setMaxPage] = useState(1);
    const [lastBlog, setLastBlog] = useState(1);
    useEffect(()=>{
        fetch(`${url}?_page=1`) //pass in any valid api endpoint while invoking useFetch()
        .then((initialRes) => {
            if(initialRes.ok){
                return initialRes.json()
            } else {
                throw new Error("Could not fetch the data")
            }
        })
        .then((initialData)=>{
            setMaxPage(initialData.pages)
            setLastBlog(initialData.items)
        })
        .catch((e) =>{
            console.log(e);
        })  
})
    return {maxPage, lastBlog};
}
 
export default useInitialFetch;