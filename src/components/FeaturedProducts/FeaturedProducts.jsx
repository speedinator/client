import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'


import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({ type }) => {

    type= "featured"
    console.log(type)

    // const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][&eq]=${type}`)
    const { data, loading, error } = useFetch("/products?populate=*")

    // data.length && console.log(data[0])

    //  data.length && console.log('außerhalb', `http://localhost:1337${data[0].attributes.img.data.attributes.url}`)

    // console.log(data[0].attributes.img.data.attributes.url)
    return (
        <div className='featuredProducts'>

            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet codnsecdftetur adipisicing elit. Quas, reiciendis sequi? Id dolores assumenda repellat officiis distinctio, eaque ab deleniti nulla facilis doloribus suscipit cumque nesciunt dolor libero consequatur sequi.</p> 
            </div>
            <div className="bottom">
                
                {/* {error ? "Something went wrong" : 
                loading 
                ? "loading"
                : data.map((item, index) => (

                // console.log(item)
                   <Card id={item.id} key={index}
                        image={item.attributes.img.data.attributes.url}
                        image2={item.attributes.img2.data.attributes.url}
                        title={item.attributes.title} price={item.attributes.price} />
                 ))
                 } */}
                 {/* {data.length && data.map((item, index) => (<img alt="" src={process.env.REACT_APP_UP_URL+item.attributes.img.data.attributes.url}></img>))} */} 
            

            
            </div>
        </div>
    )
}






export default FeaturedProducts