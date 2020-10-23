import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.image} variant='top' className="img-fluid" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'#000'}} variant="primary">
          <Card.Title as='div' variant="flush">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
          />
        </Card.Text>

        <Card.Text className="pt-3" as='h5'>&#x20B9;{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
