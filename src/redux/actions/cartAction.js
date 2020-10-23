export const addToCart = (id, qty , products) => async (dispatch) => {
  
    // eslint-disable-next-line
    const productDetails = products.filter(product => product.id == id)

    var product = productDetails.reduce(function(obj,item){ obj[item.key] = item.value; 
        return obj;
    })
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        product: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty,
      },
    })
  }
  
  export const removeFromCart = (id) => (dispatch) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    })
  }