import React from 'react'
import '../css/results.css'
import logo from '../assets/logo.png'
import strokeImg from '../assets/13343.png'
import { Link } from 'react-router-dom'
const Results = () => {
  return (
    <div>
      <div className='container-img'>
      <Link to='/'><button className='btn'>back</button></Link>
        <h1>Result Analysis</h1>
        <div className='container-result'>
         <img src={strokeImg} className='img-container-result'/>
        </div>
        <div className='container'>
            <div className='img-container'>
            <img src={strokeImg} className='img-container-result-card'/>
            <caption className='font-semibold'>RAW CT SCAN</caption>
            </div>

            <div className='img-container'>
            <img src={strokeImg} className='img-container-result-card'/>
            <caption  className='font-semibold '>MASKED IMAGE</caption>
            </div>

            <div className='img-container'>
            <img src={strokeImg} className='img-container-result-card'/>
            <caption  className='font-semibold'>AFFECTED AREA</caption>
            </div>

            <div className='img-container'>
            <img src={strokeImg} className='img-container-result-card'/>
            <caption  className='font-semibold'>ORIGINAL</caption>
            </div>
            
        </div>
       
      </div>
    
    </div>
  )
}

export default Results