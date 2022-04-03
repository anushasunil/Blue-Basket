import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (...args) => {
    const [method, endpoint, content] = [...args];
    const [loading, setLoading] = useState(true);
    const [responseData, setResponseData] = useState({});
    const [errorFlag, setErrorFlag] = useState(false);

    useEffect(() => {

        (async () => {
            try {
                const response = {}
                switch(method){
                    case "GET" : 
                        setLoading(true);
                        response = await axios.get(endpoint).then(response => setResponseData(response.data));
                        break;
                    case "POST": 
                        setLoading(true);
                        console.log("evejbvhbrjvb entered post function");
                        response = await axios.post(endpoint, content).then(response => {
                            setResponseData(response.data); 
                            console.log(response)
                        });
                        break;
                    default: console.log("error but okay")
                }
            } catch (error) {
                setErrorFlag(true);
            } finally {
                setLoading(false);
            }
        })()
    }, [])

    return { loading, responseData, errorFlag }
}

export { useAxios };