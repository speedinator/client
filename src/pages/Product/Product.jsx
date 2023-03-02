import React from 'react'
import "./Product.scss"
import  AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import  FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'

const Product = () => {
  
  const [selectedImg, setSelectedImg] = React.useState(0)
  const [quantity, setQuantity] = React.useState(1)

  
  const images = [
    "../../img/Slider/front totale.png",
    "../../img/Slider/400er Vesa Direkthalterung 3.png"
  ]
  
  
  
  return (
    <div className='product'>

      <div className="left">
        
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>Price</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quos adipisci sint corrupti, obcaecati necessitatibus quod laudantium amet quae odio molestias cum magnam laborum ex nesciunt esse perspiciatis, provident unde.</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev ===1 ? 1 : prev - 1) }>-</button>
            {quantity}
                      
          <button  onClick={() => setQuantity(prev => prev + 1) }>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon></AddShoppingCartIcon>
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon> </FavoriteBorderIcon>
            ADD TO WISH
          </div>


          <div className="item">
            <BalanceIcon></BalanceIcon>
            COMPARE
          </div>

        </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type</span>
            <span>Tag: T-Shirt</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>Mehr INFO</span>
            <hr />
            <span>INFO INFO</span>

          </div>
      </div>

    </div>
  )
}

export default Product