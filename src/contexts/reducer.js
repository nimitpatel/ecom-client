import { SET_PRODUCT_LIST } from "./types"

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload
            }
        default:
            return state
    }
}