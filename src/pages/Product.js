import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Meta from '../components/Meta'
import { listProductDetails } from '../redux/actions/productAction'

const ProductScreen = ({ history, match }) => {

  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const products = useSelector((state) => state.product.products)

  const productDetails = useSelector((state) => state.productDetails)
  const { product } = productDetails


  useEffect(() => {
    dispatch(listProductDetails(match.params.id,products))
  }, [dispatch,match,products])

  const addToCartHandler = () => {
      history.push(`/cart/${match.params.id}?qty=${qty}`)
  }


  return product ? (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
        <>
          <Meta title={product.name} />
          <div className="row">
            <div className="col-md-6">
              <Image src={product.image} alt={product.name} fluid />
            </div>
            <div className="col-md-3">
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h4>{product.name}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: &#x20B9;{product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div className="col-md-3">
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <div className="row">
                      <div className="col">Price:</div>
                      <div className="col">
                        <strong>&#x20B9;{product.price}</strong>
                      </div>
                    </div>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <div className="row">
                      <div className="col">Status:</div>
                      <div className="col">
                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </div>
                    </div>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <div className="row">
                        <div className="col">Qty</div>
                        <div className="col">
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </div>
                      </div>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      disabled={product.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </div>
        </>
    </>
  ):
  <>
  </>
}

export default ProductScreen
