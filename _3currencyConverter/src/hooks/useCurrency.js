import { useEffect,useState } from "react";
const apiKey = 'https://open.er-api.com/v6/latest/USD';
function useCurrencyInfo(currency)
{
const [data,setData]=useState({})

    useEffect(()=>{
        fetch(`https://open.er-api.com/v6/latest/${currency}?apikey=${apiKey}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
            }
            return res.json();
        })
        .then((res) => setData(res.rates))
        .catch((error) => console.error(error));
    },[currency])

    return data
}

export default useCurrencyInfo


