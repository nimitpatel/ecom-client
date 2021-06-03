import { useEffect, useState } from "react"

import { useCallAction, useStoreFetch } from "../../hooks"
import { SET_PRODUCT_LIST } from "../../contexts/types"
import { get } from "../../utils/axiosHandlers"
import { ProductCard } from "../common/ProductCard"

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
        <div className="cards">
            {loading ? 'loading...' : products.map(({ url, id, name, category }) => (
                <ProductCard src={url} name={name} category={category} id={id} />
            ))}
        </div>
    )
}