export const addProductToBasket = (product)=>{
    return{
        type:"ADD_PRODUCT",
        payload:product
    }
}

export const removeProductFromBasket = (productId)=>{
    return{
        type:"REMOVE_PRODUCT",
        payload:productId
    }
}