import './App.css';
import Nav from "./components/Navbar";
import Footer from './components/Footer';


function  App({pageProducts, handleAddProduct, itemProducts}) {

  

  return (
    
    <div>
     <Nav itemProducts={itemProducts} />
      
   <section className='background-section'>
   
    <div className='sale'>
    
    <div className='title-container'>
      
      <h4>UP TO 50% OFF</h4>
      <h1>Shirt For Man</h1>
      <p>Maboriosam in a nesciung eget magnae
dapibus disting tloctio in the find it pereri
odiy maboriosm.</p>
      <button>SHOP NOW!</button>
    </div>
    <div className='background-box'>

    </div>
    </div>
    
   </section>

   <section className='collection-box'>
    <div className='relative-container'>
      <img src={require("./pictures/0.jpg")}/>
      <div className='container'>
      <p>Man's Collections</p>
      <h2>Summer Travel Collection</h2>
      <button>DISCOVER NOW</button>
    </div>
    </div>

    <div className='relative-container'>
    <img src={require("./pictures/1.jpg")}/>
      <div  className='container'>
      <p>Bag Collections</p>
      <h2>Awesome Bag 2020</h2>
      <button>SHOP NOW</button>
      </div>
      </div>

    <div className='relative-container'>
    <img src={require("./pictures/2.jpg")}/>
      <div  className='container'>
      <p>Flash Sale</p>
      <h2>Mid Season Up To <span>40%</span> Off</h2>
      <button>DISCOVER NOW</button>
    </div></div>
   </section>

   <section className='button-section'>
    <h1 className="title">Trending Item</h1>
    <div className='button-categories'>
      <button>MAN</button>
      <button>WOMAN</button>
      <button>KIDS</button>
      <button>ACCESSORIES</button>
      <button>ESSENTIAL</button>
      <button>PRICES</button>
    </div>
   </section>

   <section className='picture-section'>
    {pageProducts.map(pageProduct =>
      <div><div className='hover-image'><img src={require("./pictures/"+pageProduct.image+".jpg")}/></div><div>
      <h4>{pageProduct.name}</h4>
      <p>${pageProduct.price}</p>
      <button onClick={()=>handleAddProduct(pageProduct)}>Add to cart</button>
    </div></div>
    )}
   </section>

   <Footer  />
  </div>
  )
  
}

 export default App;
