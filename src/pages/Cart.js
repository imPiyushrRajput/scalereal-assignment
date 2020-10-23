import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ListGroup, Image,Button, Card } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../redux/actions/cartAction'

const Cart = ({ match, location, history }) => {

  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart


  const products = useSelector((state) => state.product.products)

  useEffect(() => {
    if (productId) {
        dispatch(addToCart(productId, qty,products))
    }
  }, [dispatch, productId, qty,history,products])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }


  return (
    <div className="row">
      <div className="col-md-8">
        {cartItems.length === 0 ? (
            <><h4>Your cart is empty</h4><Link className='btn btn-light my-3' to='/'>Go Back</Link></>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <div className="row d-flex align-items-center">
                  <div className="col-md-3">
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </div>
                  <div className="col-md-3">
                    <Link to={`/product/${item.product}`} style={{textDecoration:'none',color:'#000'}}>{item.name}</Link>
                  </div>
                  <div className="col-md-3">&#x20B9;{item.price}</div>
                  <div className="col-md-3">
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
      <div className="col-md-4">
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h4>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h4>
              &#x20B9;
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  )
}

export default Cart
