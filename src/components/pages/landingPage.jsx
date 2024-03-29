import React from 'react'
import '../css/landingPage.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import doctor from '../assets/doctorImage.png'
import Developers from './developers'
import Contacts from './Contacts'


const landingPage = () => {
  const scrollToDevelopers = () => {
    const developersSection = document.getElementById('developers');
    if (developersSection) {
      developersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContacts=()=>{
    const developersSection = document.getElementById('contacts');
    if (developersSection) {
      developersSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <div className='big-wrapper light '>
    <header>
    <div class="container">
      <div class="logo">
        <img src={logo} alt="Logo" />
        <h3>StrokeScan</h3>
      </div>

      <div class="links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href='#developers' onClick={scrollToDevelopers}>Team Memebers</a></li>
          <li><a href="#contacts" onClick={scrollToContacts}>Contact</a></li>
          <Link to='/uploadPage'> <li><a href='#' className='btn'>Upload</a></li></Link>
        </ul>
      </div>

      <div class="overlay"></div>

      <div class="hamburger-menu">
        <div class="bar"></div>
      </div>
    </div>
  </header>
  <div class="showcase-area">
  <div class="container">
    <div class="left">
      <div class="big-title">
        <h1>Future is here,</h1>
        <h1>Predict Stroke With StrokeScan.</h1>
      </div>
      <p class="text">
        securely manage patient scans 
        for accurate prediction
      </p>
      <div class="cta">
       <Link to='/uploadPage'> <a href="#" class="btn">Get started</a></Link>
      </div>
    </div>

    <div class="right">
     <img src={doctor} alt="Image" class="person" />
    </div>
  </div>
</div>
<section id='developers'>
<Developers/>
</section>
<section id='contacts'>
<Contacts/>
</section>
</div>



  )
}

export default landingPage