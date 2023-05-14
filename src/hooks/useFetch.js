import {useEffect,useState,useCallback} from 'react'

export const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [method,setMethod] = useState(null)
    const [callFetch,setCallFetch] = useState(null)
    const [config,setConfig] = useState(null)
    const [loading,setLoading] = useState(false)
    const [idClient,setIdClient] = useState(null)

    const handleDataClient = useCallback((data,method)=>{
        if(method === "POST"){
            setConfig({
                "method":"POST",
                "headers":{
                    "content-type":"application/json"
                },
                "body": JSON.stringify(data)
            })

            setMethod("POST")

       }else if(method === "DELETE"){
        setConfig({
            "method":"DELETE",
            "headers":{
                "content-type":"application/json"
            }
        })

        setMethod("DELETE")
        setIdClient(data)
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
      const fetchOptions = [url,config]

      const handleUser = async () => {
        let response;

        if(method === "POST"){

            setLoading(true);
                const respInsert = await fetch(...fetchOptions)
                response = await respInsert.json()
                setCallFetch(response)
            setLoading(false)

         }else if(method === "DELETE"){

            setLoading(true);
                const urlDeleteClient = `${url}/${idClient}`
                const respDelClient = await fetch(urlDeleteClient,config)
                response = await respDelClient.json()
                setCallFetch(response)
            setLoading(false)

        }

     }

        handleUser()
    },[url,method])
    

    return {data,handleDataClient,loading}
}

