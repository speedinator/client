import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'


const Cart = () => {

    const data = [
        {
            id: 1,
            image: "../img/Slider/front totale.png",
            image2: "../img/Slider/Vesa Halterung 400 variabel (ohne Gelenk) front 1.jpg",
            price: "149",
            title: "Vesa 400 Mount",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta, est quis necessitatibus voluptas minus deleniti aspernatur unde sint beatae quidem, vel nisi a voluptates inventore impedit odio aliquam aut?"
        },
        {
            id: 2,
            image: "../img/Slider/Vesa Halterung 400 variabel (ohne Gelenk) front 1.jpg",
            image2: "../img/Slider/front totale.png",
            price: "149",
            title: "Vesa 400 Mount",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta, est quis necessitatibus voluptas minus deleniti aspernatur unde sint beatae quidem, vel nisi a voluptates inventore impedit odio aliquam aut?"
        },
    ]
    return (
        <div className='cart'>
            <h1> Products in your cart</h1>
            {data?.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.image} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>

                        <p>{item.desc.substring(0, 100)} </p>
                        <div className="price">1x €{item.price}</div>
                    </div>

                    <DeleteOutlinedIcon className='delete' />
                </div>
            ))
            }
            <div className="total">
                <span>Gesamt</span>
                <span>€ Summer</span>
            </div>
            <button>Zur Kasse</button>
            <span className='reset'>Kasse zurücksetzen</span>

        </div>
    )
}

export default Cart