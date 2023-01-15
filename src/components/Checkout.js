import { useState } from 'react';
import Nav from "./Navbar";
import {FaCreditCard, FaCcMastercard,FaCcVisa} from "react-icons/fa";
import {SiPayoneer} from "react-icons/si";
import Countries from "../ISO3166-1.alpha2.json";
import data from "../city.json";
import companies from "../companies.json";
import Footer from "./Footer";


export default function Checkout({itemProducts}) {
   
const[displayCountries, setDisplayCountries] = useState(false);
const[displayCities, setDisplayCities] = useState(false);
const [displayCompany, setDisplayCompany] = useState(false);
const [values, setValues] = useState("");
const [cityValues, setCityValues] = useState("");
const [companyValues, setCompanyValues] = useState("");


const toggleCountry =() => {
    setDisplayCountries(true);
    if(displayCountries === true){
        setDisplayCountries(false);
    }
}

const toggleCities = () => {
  setDisplayCities(true);
  if(displayCities === true){
    setDisplayCities(false);
  }
}

const toggleCompany = () => {
  setDisplayCompany(true)
  if(displayCompany === true){
    setDisplayCompany(false)
  }
}

const countries = data.countries;



  return (
    
    <div>
     <Nav itemProducts={itemProducts}/>
      
  <section className='section'>
    <div className='signup-allign'>
        <h1>Make Your Checkout Here</h1>
        <b>Please register in order to checkout more quckly</b>

        <div className='grid-signup'>
            <div>
                <p>First Name<span> *</span></p>
                <input type="text"/>
            </div>
            <div>
                <p>Last Name<span> *</span></p>
                <input type="text"/>
            </div>
            <div>
                <p>Email Address<span> *</span></p>
                <input type="text"/>
            </div>
            <div>
                <p>Phone Number<span> *</span></p>
                <input type="text"/>
            </div>
            <div className='country-col'> 
                <p>Country<span> *</span></p>
                <input className='country' onClick={toggleCountry} type="text" value={values}/>
                {displayCountries && (<ul className='list'>
                {Object.values(Countries).map(country=>{
                   return <li onClick={()=>{setDisplayCountries(false); setValues(country)}}>{country}</li>
                }) }
                </ul>)}
            </div>
            <div className='country-col'>
                <p>State/Divition<span> *</span></p>
                <input className='country' onClick={toggleCities} type="text" value={cityValues} />
                {displayCities && (<ul className='list2'>
                  {countries.map(city=>{
                     return   <li onClick={()=>{setDisplayCities(false); setCityValues(city.capital)
                    }}>{city.capital}</li>
                  })}
                </ul>)}
            </div>
            <div>
                <p>Address Line 1<span> *</span></p>
                <input type="text"/>
            </div>
            <div>
                <p>Address Line 2<span> *</span></p>
                <input type="text"/>
            </div>
            <div>
                <p>Postal Code<span> *</span></p>
                <input type="text"/>
            </div>
            <div className='country-col'>
                <p>Company<span> *</span></p>
                <input className='country' onClick={toggleCompany} value={companyValues} type="text"/>
                {displayCompany && (<ul className='list'>
                  {companies.map(company=>{
                      return <li onClick={()=>{setDisplayCompany(false); setCompanyValues(company.name)}}>{company.name}</li>
                            }
                           )}
                </ul>)}
            </div>
        </div>
    </div>

    <div className='payment-box'>
        <h2>CART TOTALS</h2>
        <div className='flexed-box'>
            <p>Sub Total</p>
            <p>$330.00</p>
        </div>
        <div className='flexed-box'>
            <p>(+) Shipping</p>
            <p>$10.00</p>
        </div>
        <div className='flexed-box'>
            <p>Total</p>
            <p>$340.00</p>
        </div>
        <h2>PAYMENTS</h2>
        <div className='flexed-start'><input type="checkbox"/><p>Check Payments</p></div>
        <div className='flexed-start'><input type="checkbox"/><p>Cash On Delivery</p></div>
        <div className='flexed-start'><input type="checkbox"/><p>PayPal</p></div>

        <div className='icon-container'>
            <FaCcMastercard/>
            <SiPayoneer/>
            <FaCcVisa/>
            <FaCreditCard/>
        </div>
        <div className='button-box'>
            <button>PROCEED TO CHECKOUT</button>
        </div>
       
    </div>
    
    </section>    


   <Footer />
  </div>
  )
  
}
