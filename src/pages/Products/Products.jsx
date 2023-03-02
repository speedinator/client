import React from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import "./Products.scss"

const Products = () => {

  const catId = parseInt(useParams().id)
  // console.log(id)
  const [maxPrice, setMaxPrice] = React.useState(0)
  const [sort, setSort] = React.useState(null)





  return (
    <div className='products'>
    <div className="left">
      <div className="filterItem">
        <h2>Product Categories</h2>
        <div className="inputItem">
          <input type="checkbox" id="1" value={1}/>
          <label htmlFor="1">Monitor Mount</label>
          <br></br>
          <input type="checkbox" id="2" value={2}/>
          <label htmlFor="1">Beamer Mount</label>
        </div>
      </div>
      <div className="filterItem">

        <h2>Filter by price</h2>
        <div className="inputItem">
          <span>0</span>
          <input type="range" min={0} max={190} onChange={(e) =>setMaxPrice(e.target.value) }/>
          <span>{maxPrice}</span>
        </div>
      </div>
      <div className="filterItem">
        <h2>Sort by</h2>
        <div className="inputItem">
          <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort(console.log(e.target.value))}/>
          <label htmlFor="asc">Price (Lowest first)</label>
        </div>
        <div className="inputItem">
          <input type="radio" id="dsc" value="dsc" name="price" onChange={e=>setSort(console.log(e.target.value))}/>
          <label htmlFor="asc">Price (Highest first)</label>
        </div>
      </div>
    </div>
    <div className="right">
      <img className='catImg' src="../img/Slider/front totale.png" alt="" />

      <List catId={catId} maxPrice={maxPrice} sort={sort}></List>
    </div>
  
  </div>
  )
}

export default Products