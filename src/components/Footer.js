import React from 'react';
import {FaCcPaypal, FaCcMastercard,FaCcVisa} from "react-icons/fa";

export default function Footer() {

  

  return (
    <>
        <footer>
    <aside className='footer-info-box'>
      <main>
        <h2>Eshop<span>.</span></h2>
        <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
        <h4>Got Question? Call us 24/7</h4>
        <h3>+0123 456 789</h3>
      </main>

      <article>
        <b>Information</b>
        <p>About Us</p>
        <p>Faq</p>
        <p>Terms & Conditions</p>
        <p>Contact Us</p>
        <p>Help</p>
      </article>
      <article>
        <b>Customer Service</b>
        <p>Payment Methods</p>
        <p>Money-back</p>
        <p>Returns</p>
        <p>Shipping</p>
        <p>Privacy Policy</p>
      </article>
      <article>
        <b>Get In Tuch</b>
        <p>NO. 342 - London Oxford Street.</p>
        <p>012 United Kingdom.</p>
        <p>info@eshop.com</p>
        <p>+032 3456 7890</p>
      </article>
    </aside>

    <section className='payment-section'>
      <div>
        <p>
        Copyright © 2020 Wpthemesgrid - All Rights Reserved.
        </p>
      </div>
      <div className='payment-icons'>
        <FaCcVisa/>
        <FaCcPaypal/>
        <FaCcMastercard/>
      </div>
    </section>
   </footer>
    </>
  )
}
