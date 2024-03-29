import React from 'react';
import doctorImg from '../assets/logo.png';
import logo from '../assets/doctorImage.png';
import rathan from '../assets/MITE_CSE_Rathan_SR.jpg'
import ruchitha from '../assets/IMG-20240131-WA0016.jpg'
import pushpa from '../assets/IMG-20240328-WA0000 (1).jpg';
import sumanth from  '../assets/IMG-20240328-WA0003.jpg'
import pradeep from '../assets/pradeep.png'
import Slider from "react-slick";
import '../css/developers.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  { FiTwitch, FiTwitter } from 'react-icons/fi'
import { FaLinkedinIn } from "react-icons/fa";

const Developers = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="developer-container">
    <div className='w-3/5'>
    <Slider {...settings}>
      {
        data.map((d, index) => ( // Adding index as a key for each mapped element
          <div key={index} className='bg-white h-[450px] text-black rounded-xl'> {/* Adding a key prop */}
            <div className='rounded-t-xl bg-blue-300 flex justify-center item-center '>
              <img src={d.img} alt={d.name} className='h-44 w-44 rounded-full m-5' /> {/* Fixing the image source */}
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
              <p className='text-xl  font-semibold'>{d.name}</p>
              {index==0 ? (<p className=''>{d.Qualification}</p>) : (<p className='disabled'></p>)}
              {index==0 ? (<p className=''>Project Guide</p>) : (<p className='disabled'></p>)}
              <p>{d.department}</p>
              <FaLinkedinIn className=' size-7 w-5 h-5 cursor-pointer' />
             <p></p>
            </div>
          </div>
        ))
      }
      </Slider>
    </div>
    
    </div>
  );
};

const data = [
  {
    name: "Dr Pradeep B S",
    img: pradeep, // Fixing the way images are referenced
    Qualification : "Professor and Dean R&D",
    department: "Computer Science and Engineering" // Fixing the department name
  },
  {
    name: "Mr Sumanth Hegde",
    img: sumanth, // Fixing the way images are referenced
    department: "Computer Science and Engineering"
  },
  {
    name: "Mr Rathan S R",
    img: rathan, // Fixing the way images are referenced
    department: "Computer Science and Engineering"
  },
  {
    name: "Ms Ruchitha R",
    img: ruchitha, // Fixing the way images are referenced
    department: "Computer Science and Engineering" // Fixing the department name
  },
  {
    name: "Ms Pushpa Mangal Gond",
    img: pushpa, // Fixing the way images are referenced
    department: "Computer Science and Engineering" // Fixing the department name
  }
];

export default Developers;