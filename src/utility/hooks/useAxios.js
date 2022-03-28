import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (endpoint) => {

    const [loading, setLoading] = useState(true);
    const [responseData, setResponseData] = useState([]);
    const [errorFlag, setErrorFlag] = useState(false);

    useEffect(() => {

        (async () => {
            try {
                setLoading(true);
                const response = await axios.get(endpoint);
                setResponseData(response.data);
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