import React from "react";
import "./Slider.scss" 
import WestOutlinedIcon  from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Slider = () => {

const [currentSlide, setCurrentSlide] = React.useState(0);


    const data = [
        "../img/Slider/Vesa Halterung 400 variabel (ohne Gelenk) mit Monitor breit 6.png",
        "../img/Slider/Vesa Halterung 400 variabel (ohne Gelenk) mit Monitor breit 3.png",
        "../img/Slider/400er Vesa Direkthalterung breit 4.png"
    ]

const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
}
const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
}



    // console.log(data)

    return (
    <div className="slider">
        <div className="container" style={{ transform:`translateX(-${currentSlide * 100}vw)`}}>
        
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon />

            </div>
        </div>
    </div>
    )
}

export default Slider;
