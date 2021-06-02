import { useEffect, useState } from "react"

import { useCallAction, useStoreFetch } from "../../hooks"
import { SET_PRODUCT_LIST } from "../../contexts/types"
import { get } from "../../utils/axiosHandlers"

export const ProductList = () => {
    const [products, setProducts] = useState([])

    const list = useStoreFetch('productList')
    const { loading, fetchData } = useCallAction()

    useEffect(() => {
        get('/product/list').then(res => fetchData(SET_PRODUCT_LIST, res.data))
    }, [])

    useEffect(() => {
        setProducts(list)
    }, [list, loading])
    
    return (
        <>
            {loading? 'loading...' : products.map(item => {
                return <p>{item.name}</p>
            })}
        </>
    )
}