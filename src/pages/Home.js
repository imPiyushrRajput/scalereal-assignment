import React, { useEffect ,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import Product from '../components/Product'
import Meta from '../components/Meta'
import ProductCarousel from "../components/ProuductCarousel"
import { listProducts } from "../redux/actions/productAction"


const Home = () => {

  const dispatch = useDispatch()

  const products = useSelector((state) => state.product.products)

  const [sortKey, setSortKey] = useState('Sort')
  const [catKey, setCatKey] = useState('All')

  useEffect(() => {
    dispatch(listProducts(sortKey,catKey))
  }, [dispatch,sortKey,catKey])

  return (
    <>
      <Meta />
        <ProductCarousel />
        <div className="row">
          <div className="col-md-3 pt-2">
            <Form.Control
            as='select'
            value={catKey}
            onChange={(e) => setCatKey(e.target.value)}
          >
            <option value="All"> - All - </option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            </Form.Control>

          </div>
          <div className="col-md-3 pt-2 ml-auto">
          <Form.Control
            as='select'
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
          >
            <option value="Sort"> - Sort By - </option>
            <option value="high-rating">Highest Rating</option>
            <option value="low-rating">Lowest Rating</option>
            </Form.Control>
          </div>
        </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3" key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
    </>
  )
}

export default Home
