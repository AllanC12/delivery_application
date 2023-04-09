import {useEffect,useState} from 'react'

export const useFetch = (url) => {
    const [data,setData] = useState(null)
    
    useEffect(()=>{
       const getDataClient = async () =>{
        try{
            const res = await fetch(url)
            const response = await res.json()
            setData(response)
        }catch(err){
          console.log(err.message)
         }

        }
        getDataClient()
    },[url])


    return {data}
}

