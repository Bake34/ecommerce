import { useState } from 'react';
import {FaHeadphonesAlt, FaCartPlus, FaUser, FaRegHeart, FaEnvelope, FaMapMarker, FaRegClock, FaSearch} from "react-icons/fa";
import {MdAccountCircle} from "react-icons/md";
import {IoIosArrowDown} from "react-icons/io"
import {GiHamburgerMenu} from "react-icons/gi"
import {Link} from "react-router-dom";
import "../checkout.css";


export default function Nav({itemProducts}){

    const[onHover, setOnHover] = useState(false);
    const[onHoverBlog, setOnHoverBlog] = useState(false);
    const [category, setCategory] = useState(false);
    const [rotate, setRotate] = useState("");
    const [categoryType, setCategoryType] = useState("All Category");
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
    setOpenMenu(true);

    
    if(openMenu === true){
        setOpenMenu(false);
    }
    }

    const toggleCategory = () => {
        setCategory(!category)
        if(category === false){
          setRotate("rotation")
        }
        else{
          setRotate("")
        }
      };

    return <>
    <header className='navbar-support'>
    <div className='left-section'>
   
    <div className='nav-textbox'> 
      <FaHeadphonesAlt className='icon'/>
      <p>+060 (800) 801-582</p>
      </div>
    <div className='nav-textbox2'>
      <FaEnvelope className='icon'/>
      <p>support@shophub.com</p>
    </div>
    
    </div>
    <div className='right-section'>
      <div className='nav-textbox'>
      <FaMapMarker className='icon'/>
      <p>Store location</p>
      </div>
      <div className='nav-textbox'>
      <FaRegClock className='icon'/>
      <p>Daily deal</p>
      </div>
      <div className='nav-textbox2'>
      <FaUser className='icon'/>
      <p>Login</p>
      </div>
    
    </div>
    

  </header>
   <header className='navbar-search'>
     <div className='left-section'><h1>Eshop<span className='dot'>.</span></h1></div>
     <div className='middle-section'>
      <div className='search-bar'>
        <div className='category-search'onClick={toggleCategory}>
        <p >{categoryType}  </p><IoIosArrowDown  className={`arrow ${rotate}`} />
        
        </div>
        
          <input type="text" placeholder='Search Products Here.....'/>
          <button><FaSearch className='search'/></button>
      </div>
      {category && (
      <ul className='category-options' onClick={toggleCategory}>
          <li onClick={()=> setCategoryType("All Category")}>All Category</li>
          <li onClick={()=> setCategoryType("Watch")}>Watch</li>
          <li onClick={()=> setCategoryType("Mobile")}>Mobile</li>
          <li onClick={()=> setCategoryType("Kid's Item")}>Kid's Item</li>
        </ul>)}
     </div>
     <div className='right-section'>
     <FaRegHeart className='icon2'/> <MdAccountCircle className='icon2'/> <Link to="/cart" className='curt'><FaCartPlus className='icon2'/><a className='broj'>{itemProducts.length}</a></Link>
     </div>
     <div className="hamburger-menu"><GiHamburgerMenu onClick={toggleMenu} /></div>
   </header>
   
   <header className='navbar-categories'>
     
      <h1 className='home'><GiHamburgerMenu className='burger'/> CATEGORIES</h1>
      {openMenu && (
      <div className='middle-section'>
      <h3><Link className='home-link' to="/">Home</Link></h3>
      <h3>Product</h3>
      <h3>Service</h3>
      <h3 onMouseEnter={()=> setOnHover(true)} onMouseLeave={()=>setOnHover(false)} className='shp'>Shop<IoIosArrowDown className='arrow'/> {onHover &&(<ul className='cart-box'>
       <Link className='cart-link' to="/cart"> <li>Cart</li></Link>
        <li>Checkout</li>
      </ul>)}</h3>
      
      <h3>Pages</h3>
      <h3  onMouseEnter={()=> setOnHoverBlog(true)} onMouseLeave={()=>setOnHoverBlog(false)} className='shp'>Blog <IoIosArrowDown  className='arrow'/> {onHoverBlog && (<ul className='cart-box'>
        <li>Blog Single Sidebar</li>
      </ul>)}</h3>
      <h3>Contact Us</h3>
     </div>)}
     <div className='middle-section2'>
      <Link className='home-link' to="/"><h3>Home</h3></Link>
      <h3>Product</h3>
      <h3>Service</h3>
      <h3 onMouseEnter={()=> setOnHover(true)} onMouseLeave={()=>setOnHover(false)} className='shp'>Shop<IoIosArrowDown className='arrow'/> {onHover &&(<ul className='cart-box'>
       <Link className='cart-link' to="/cart"> <li>Cart</li></Link>
       <Link className='cart-link' to="/checkout"><li>Checkout</li></Link>
      </ul>)}</h3>
      
      <h3>Pages</h3>
      <h3  onMouseEnter={()=> setOnHoverBlog(true)} onMouseLeave={()=>setOnHoverBlog(false)} className='shp'>Blog <IoIosArrowDown  className='arrow'/> {onHoverBlog && (<ul className='cart-box'>
        <li>Blog Single Sidebar</li>
      </ul>)}</h3>
      <h3>Contact Us</h3>
     </div>
     
   </header>
   </>
}