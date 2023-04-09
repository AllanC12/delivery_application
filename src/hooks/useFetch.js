import {useEffect,useState,useCallback} from 'react'

export const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [method,setMethod] = useState(null)
    const [callFetch,setCallFetch] = useState(null)
    const [config,setConfig] = useState(null)
    const [loading,setLoading] = useState(false)

    const registerClient = useCallback((data,method)=>{
        if(method === "POST"){
            setConfig({
                "method":"POST",
                "headers":{
                    "content-type":"application/json"
                },
                "body": JSON.stringify(data)
            })

            setMethod("POST")
       }
    })


    
    useEffect(()=>{
       const getDataClient = async () =>{
        try{
            setLoading(true)
                const res = await fetch(url)
                const response = await res.json()
                setData(response)
            setLoading(false)
        }catch(err){
          console.log(err.message)
          setLoading(false)
         }

        }
        getDataClient()
    },[url,callFetch])

    useEffect(()=>{
       if(method === "POST"){
         const createUser = async () => {
            setLoading(true);
                const fetchOptions = [url,config]
                const respInsert = await fetch(...fetchOptions)
                const responseInsert = await respInsert.json()
                setCallFetch(responseInsert)
            setLoading(false)
         }
         createUser()
       }
    },[url,method])
    

    return {data,registerClient,loading}
}

