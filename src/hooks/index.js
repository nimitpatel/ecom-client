import { useCallback, useContext, useEffect, useState } from "react"
import { Context } from "../contexts"
import { getCookie } from "../utils/getCookie"

// hook to know weather user is logged in or not
// returns boolean
export const useCheckAuth = () => {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const cookie = getCookie('ecom')

        cookie && setIsAuth(true)
    }, [])

    return {
        isAuth
    }
}

// hook to access store
// takes store name
// return store data
export const useStoreFetch = (storeName) => {
    const [data, setData] = useState([])
    const { state } = useContext(Context)

    useEffect(() => {
        setData(state[storeName])
    }, [state])
    
    return data
}

// hook to dispatch action
// takes action type and payload
export const useCallAction = () => {
    const [loading, setLoading] = useState(false)
    const { dispatch } = useContext(Context)

    const fetchData = useCallback(
        async (type, payload) => {
            try {
                setLoading(true)
                await dispatch({ type, payload })
            } catch (err) {
                throw err
            } finally {
                setLoading(false)
            }
        },
        []
    )
    
    return {
        loading,
        fetchData
    }
}