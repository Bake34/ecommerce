import App from "./App";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"
import {Routes, Route} from "react-router-dom";
import React, { useState } from 'react';


export default function Links(){

    const pageProducts = [
        {
          name:"Women Hot Collection",
          image:"majica",
          price:"29.00",
          info:"Maboriosam in a tonto nesciung eget distingy magndapibus",
          id:1,
        },
        {
          name:"Awesome Pink Show",
          image:"patika",
          price:"29.00",
          info:"Maboriosam in a tonto nesciung eget distingy magndapibus",
          id:2,
        },
        {
          name:"Awesome Bags Collection",
          image:"tasna",
          price:"29.00",
          info:"Maboriosam in a tonto nesciung eget distingy magndapibus",
          id:3,
        },
        {
          name:"Women Pant Collection",
          image:"pantole",
          price:"29.00",
          info:"Maboriosam in a tonto nesciung eget distingy magndapibus",
          id:4,
        },
        {
          name:"Awesome Bags Collections",
          image:"vreca",
          price:"29.00",
          info:"Maboriosam in a tonto nesciung eget distingy magndapibus",
          id:5,
        },
        {
          name:"Awesome Cap Collection",
          image:"sesir",
          price:"29.00",
          info:"Maboriosam in a tonto nesciung eget distingy magndapibus",
          id:6,
        },
        {
          name:"Polo Dress For Women",
          image:"kosuljica",
          price:"29.00",
          info:"Maboriosam in a tonto nesciung eget distingy magndapibus",
          id:7,
        },
        {
          name:"Black Sunglass For Women",
          image:"cvike",
          price:"50.00",
          info:"Maboriosam in a tonto nesciung eget distingy magndapibus",
          id:8,
        },
      ]
      const [itemProducts, setItemProducts] = useState([]);

      const handleAddProduct =(product)=>{
        const ProductExist = itemProducts.find((itemProduct)=> itemProduct.id === product.id);
        if(ProductExist){
          setItemProducts(itemProducts.map((itemProduct)=>itemProduct.id === product.id ?
          {...ProductExist, quantity: ProductExist.quantity + 1} : itemProduct
          ));
        }
        else {

          setItemProducts([...itemProducts, {...product, quantity : 1}])
        }
      }

      const handleRemoveProduct = (product)=>{
        const ProductExist = itemProducts.find((itemProduct)=> itemProduct.id === product.id);
        if(ProductExist.quantity === 1){
          setItemProducts(itemProducts.filter((itemProduct)=>itemProduct.id !==product.id));
        } else{
          setItemProducts(
            itemProducts.map((itemProduct)=>
            itemProduct.id===product.id ? {...ProductExist, quantity: ProductExist.quantity -1}
            : itemProduct
            )
          );
        }
      };

      const removeEverything =(product)=>{
        const ProductExist = itemProducts.find((itemProduct)=> itemProduct.id === product.id);
        if(ProductExist){
          setItemProducts(itemProducts.filter((itemProduct)=>itemProduct.id !==product.id));
        }
      }
        
      
 
    return (
        <>
        <Routes>
            <Route path="/" element={<App pageProducts={pageProducts} itemProducts={itemProducts}
             handleAddProduct={handleAddProduct}/>}/>
            <Route path="/cart" element={<Cart itemProducts={itemProducts}
            removeEverything={removeEverything} 
            handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>}/>
            <Route path="/checkout" element={<Checkout itemProducts={itemProducts}/>}/>
        </Routes>
        </>
    )
    }