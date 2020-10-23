export const listProductDetails = (id,products) => (dispatch) => {

    // eslint-disable-next-line
    const productDetails = products.filter(product => product.id == id)

    var product = productDetails.reduce(function(obj,item){ obj[item.key] = item.value; 
        return obj;
    })
    
    dispatch({
        type:'PRODUCT_DETAILS',
        payload:product,
    })

}
export const listProducts = (sortKey,catKey) => ( dispatch ) => {
    dispatch({
        type: 'PRODUCT_LIST',
        sortKey : sortKey,
        catKey:catKey
    })
}
