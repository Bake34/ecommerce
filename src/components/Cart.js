import {FaRegTrashAlt} from "react-icons/fa";
import "../Cart.css";
import Nav from "./Navbar";
import Footer from "./Footer";

export default function Cart({itemProducts, handleAddProduct, handleRemoveProduct, removeEverything}){

    return (<>
     <div>
     <Nav itemProducts={itemProducts} />

   <section className='cart-section'>
    <table className="title-box">
      <tbody>
      <tr className="titles">
        <th>PRODUCT</th>
        <th>NAME</th>
        <th>UNIT PRICE</th>
        <th>QUANTITY</th>
        <th>TOTAL</th>
        <th><FaRegTrashAlt/></th>
      </tr>
        

        {itemProducts.length === 0 && <tr><th>No Items</th></tr>}
        {
          itemProducts.map((itemProduct)=>
          <tr className="product-box">
            <td>
              <img src={require("../pictures/"+itemProduct.image+".jpg")}/>
            </td>
            <td className="text">
              <h3>{itemProduct.name}</h3>
              <p>{itemProduct.info}</p>
            </td>
            <td>${itemProduct.price}</td>
            <td>
              <div className="counter-box">
                <button onClick={()=>handleRemoveProduct(itemProduct)}>-</button>
                <p>{itemProduct.quantity}</p>
                <button onClick={()=>handleAddProduct(itemProduct)}>+</button>
              </div>
            
            </td>
            <td>${itemProduct.price*itemProduct.quantity}</td>
            <td><FaRegTrashAlt onClick={()=>removeEverything(itemProduct)}/></td>
        </tr>
          )
        }
        </tbody>
    </table>

      <div className='coupon-box'>
        <input placeholder="Enter Your Coupon"/>
        <button>APPLY</button>
      </div>

      <div className='shipping-box'>
        <input type="checkbox"/>
        <p>Shipping (+10$)</p>
      </div>
    
   </section>
      

   <Footer  />
  </div>
   </>
    )
}