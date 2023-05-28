import axios from "axios"
import { defaultAppCTX } from "./defaultContext"
import { useState, useEffect } from "react"

export default function useContextUpdateFromSocket(
) {
    const [context, setContext] = useState(defaultAppCTX)
    const [globalUrl] = useState('https://wh-api-gky42.ondigitalocean.app/content/')


    useEffect(() => {
        setContext((ctx: any) => {
            return {
                ...ctx,
                fetchPropertyInnerData,
                fetchPropertiesData,
            }
        })
    }, [])

    const fetchPropertiesData = () => {
        const url = `${globalUrl}properties`;
        axios
            .get(url)
            .then(response => {
                const data = response.data.data
                setContext(ctx => {
                    return { ...ctx, properties: data }
                })
            })
            .catch((error) => console.log(error));
    }

    const fetchPropertyInnerData = (id: string) => {
        const url = `${globalUrl}properties/${id}`;
        axios
            .get(url)
            .then(response => {
                const data = response.data.data
                console.log('fetchPropertyInnerData', data)
                setContext(ctx => {
                    return { ...ctx, propertyInner: data }
                })
            })
            .catch((error) => console.log(error));
    }


    return {
        context,
        fetchPropertiesData,
    }
}