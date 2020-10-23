import React, { useEffect ,useState } from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product'
import { Menu, Checkbox } from "antd";
import { DownSquareOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;


const Search = ({ match }) => {

  const keyword = match.params.keyword

  const [searchedProducts,setSearchedProducts] = useState([])
  const [brands,] = useState([{ brandId:1,name:"OnePlus"},{ brandId:2,name:"Samsung"},{ brandId:3,name:"LG"},{ brandId:4,name:"HP"},{ brandId:5,name:"Lenevo"},{ brandId:6,name:"Dell"}]);
  const [brandIds, setBrandIds] = useState([]);

  const products = useSelector((state) => state.product.products)

  const searchProduct = () => {
      // eslint-disable-next-line
    const productList = products.filter(product => product.name.toUpperCase().includes(keyword.toUpperCase()) === true);
    const myArrayFiltered = productList.filter((el) => {
      return brandIds.some((f) => {
        return f === el.brandId
      });
    });
    setSearchedProducts(myArrayFiltered)
  }
  useEffect(() => { 
    searchProduct()
    // eslint-disable-next-line
  }, [brandIds])

  const showCategories = () =>
  brands.map((c) => (
    <div key={c.brandId}>
      <Checkbox
        onChange={handleCheck}
        className=""
        value={c.brandId}
        name="category"
        checked={brandIds.includes(c.brandId)}
      >
        {c.name}
      </Checkbox>
      <br />
    </div>
  ));

  const handleCheck = (e) => {
    let inTheState = [...brandIds];
    let justChecked = e.target.value;
    let foundInTheState = inTheState.indexOf(justChecked);
    if (foundInTheState === -1) {
      inTheState.push(justChecked);
    } else {
      inTheState.splice(foundInTheState, 1);
    }
    setBrandIds(inTheState);
    searchProduct()
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 pt-2">
          <h6>Filter</h6>
          <hr />
          <Menu defaultOpenKeys={["1", "2"]} mode="inline">
            <SubMenu
              key="1"
              title={
                <span className="h6">
                 <DownSquareOutlined />  Filter By Brand
                </span>
              }
              style={{listStyle:'none'}}
            >
              <div style={{ maringTop: "10px" }}>{showCategories()}</div>
            </SubMenu>
          </Menu>
        </div>

        <div className="col-md-9 pt-2">
      
          {searchedProducts.length < 1 && <p>No products found</p>}

          <div className="row pb-5">
            {searchedProducts.map((product) => (
              <div key={product.id} className="col-md-4 mt-3">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
