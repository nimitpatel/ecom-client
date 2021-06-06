import { useEffect, useState } from "react"

import { useCallAction, useCheckAuth, useStoreFetch } from "../../hooks"
import { SET_PRODUCT_LIST } from "../../contexts/types"
import { get } from "../../utils/axiosHandlers"
import { ProductCard } from "../common/ProductCard"

export const ProductList = () => {
    const [products, setProducts] = useState([])

    const list = useStoreFetch('productList')
    const { loading, fetchData } = useCallAction()
    const { isAuth } = useCheckAuth()

    useEffect(() => {
        get('/product/list').then(res => fetchData(SET_PRODUCT_LIST, res.data))
    }, [])

    useEffect(() => {
        setProducts(list)
    }, [list, loading])

    return (
        <div className="cards">
            {
                isAuth ? (
                    <>
                        {loading ? 'loading...' : products.map(({ url, id, name, category }) => (
                            <ProductCard src={url} name={name} category={category} id={id} />
                        ))}
                    </>
                ) : (
                    <div>
                        <h1>Please login to continue</h1>
                        <p>content coming soon</p>
                    </div>
                )
            }
        </div>
    )
}