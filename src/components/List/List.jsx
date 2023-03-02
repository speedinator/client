import React from 'react'
import "./List.scss"
import Card from '../Card/Card'

const List = () => {


    const data = [
        {
            id: 1,
            image: "../img/Slider/front totale.png",
            image2: "../img/Slider/Vesa Halterung 400 variabel (ohne Gelenk) front 1.jpg",
            price: "149",
            title: "Vesa 400 Mount",
        },

        {
            id: 2,
            image: "../img/Slider/front totale.png",
            title: "Bike",
        },

        {
            id: 3,
            image: "../img/Slider/front totale.png",
            title: "Bike",
        }

    ]

  return (
    <div className='list'>{data?.map(item => (
        <Card item={item} key={item.id} image={item.image}/>

    ))}</div>


  )
}

export default List