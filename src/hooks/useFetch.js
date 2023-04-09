import {useEffect,useState} from 'react'

export const useFetch = (url) => {
    const [data,setData] = useState(null)

    useEffect(()=>{
       const getDataClient = async () =>{
           const res = await fetch(url)
           const response = await res.json()
           setData(response)
        }
        getDataClient()
    },[url])


    return {data}
}

