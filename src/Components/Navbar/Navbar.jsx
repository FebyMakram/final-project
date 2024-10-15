import React ,{useState} from "react";
import { Link } from "react-router-dom";
import NavbarLogo from "../../Assets/Images/NavbarLogo.png";
import style from "./Navbar.module.css";
import { TbUserExclamation } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import CartSidebar from '../CartSidebar/CartSidebar'

              // semi done
// الايكونات تكبر حجمها شويا  ,height of navbar should be less than this
export default function Navbar() {

  const[isCartOpen,setIsCartOpen]= useState(false)

  const openCartSidebar =() =>{
    setIsCartOpen(true)
  }

  const closeCartSidebar =()=>{
    setIsCartOpen(false)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid ">
          <Link className="navbar-brand w-25 ms-2" to={"/"}>
            <img className={style.logo} src={NavbarLogo} alt="logo" />
              <span className={style.logoName}>Furniro</span> 
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  m-auto w-50 gap-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                 <strong>Home</strong> 
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to={"/shop"}>
                  <strong>Shop</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/cart"}>
                 <strong>Cart</strong> 
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to={"/contact"}>
                 <strong>Contact</strong> 
                </Link>
              </li>
            </ul>


              {/* تغيير حجم icons */}

            <ul className="navbar-nav  me-1 w-25 gap-4">
              <li className="nav-item ">
                <Link className="nav-link" to={"/"}>
                  <TbUserExclamation />
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  <IoSearchOutline />
                </Link>
              </li>

              <li className="nav-item">
                {" "}
                <Link className="nav-link" to={"/"}>
                  <FaRegHeart />
                </Link>{" "}
              </li>


                          {/* cart sidebar btn */}
              <li className="nav-item">
                {" "}
                <Link className={`${style.cartSidebar} nav-link`} to={"/cartsidebar"}>
                  <BsCart3 />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
