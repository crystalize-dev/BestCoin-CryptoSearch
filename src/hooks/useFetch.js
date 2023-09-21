import {useEffect, useState} from "react";
import axios from "axios";


export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [coinsLoad, setCoinsLoad] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setCoinsLoad(true)

            try {
                const response = await axios.get(url);

                setCoinsLoad(false)
                await setData(response.data.json());
            } catch (error) {
                setTimeout(fetchData, 60000);
            }
        };

        fetchData()
    }, [url]);
    
    return {data, coinsLoad}
}