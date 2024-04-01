import React from 'react'
import '../css/results.css'
import logo from '../assets/logo.png'
import strokeImg from '../assets/13343.png'
import { Link } from 'react-router-dom'
import ctScan from '../assets/strokeSamples/10657.png'
import maskImage from '../assets/strokeSamples/10657_mask.png'
import bgImage from '../assets/strokeSamples/10657_segmented_bg.png'
import fgImage from '../assets/strokeSamples/10657_segmented_fg.png'
import highlighted from '../assets/strokeSamples/10657_highlighted.png'
const Results = () => {
  return (
    <div>
      <div className='container-img'>
      <Link to='/'><button className='btn'>back</button></Link>
        <h1>Result Analysis</h1>
        <div className='container-result'>
         <img src={ctScan} className='img-container-result'/>
        </div>
        <div className='container'>
            <div className='img-container'>
            <img src={highlighted} className='img-container-result-card'/>
            <caption className='font-semibold'>Stroke effected region</caption>
            </div>

            <div className='img-container'>
            <img src={fgImage} className='img-container-result-card'/>
            <caption  className='font-semibold '>foreground stroke region</caption>
            </div>

            <div className='img-container'>
            <img src={bgImage} className='img-container-result-card'/>
            <caption  className='font-semibold'>background region</caption>
            </div>
            <div className='img-container'>
            <img src={maskImage} className='img-container-result-card'/>
            <caption  className='font-semibold'>Mask region</caption>
            </div>
          
            
        </div>
       
      </div>
    
    </div>
  )
}

export default Results