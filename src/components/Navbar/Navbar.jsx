import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from "../Cart/Cart"
import { Link } from 'react-router-dom';
import './Navbar.scss'
import { useSelector } from "react-redux";

const Navbar = () => {

    const [open, setOpen] = React.useState(false)
    const products = useSelector((state) => state.cart.products);

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="img\flag-of-europe.png" alt="" />
                        <KeyboardArrowUpIcon />
                    </div>
                    <div className="item">
                        <span>EUR</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Monitor Halterung</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Bemaer Halterung</Link>
                    </div>
                    {/* <div className="item">
                        <Link className='link' to="/products/3"></Link>
                    </div> */}
                </div>
                <div className="center">
                    <Link className='link' to="/">Stacky</ Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link' to="/"> Homepage</ Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/"> Über uns</ Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/"> Kontakt</ Link>
                    </div>
                    {/* <div className="item">
                        <Link className='link' to="/"> Stores</ Link>
                    </div> */}
                    <div className="icons">
                        <SearchIcon></SearchIcon>
                        <PersonOutlineIcon></PersonOutlineIcon>
                        <FavoriteBorderIcon></FavoriteBorderIcon>
                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                            <span>{products.length}</span> 
                        </div>
                    </div>

                </div>
            </div>

            {open && <Cart />}
        </div>
    )
}

export default Navbar