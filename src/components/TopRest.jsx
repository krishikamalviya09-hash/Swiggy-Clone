import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from './Card';


const TopRest = () => {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0)

  async function fetchTopRestaurant() {
    const response = await fetch("https://dummyjson.com/recipes");
    const apiData = await response.json();
    console.log(apiData);
    setData(apiData.recipes);
  }
   function prevSlide(){
        if(slide === 0) return;
        setSlide(slide-2);

    }
    function nextSlide(){
        console.log(data.length);
        console.log(slide+6);
        if(data.length -6 <= slide) return;
        setSlide(slide+2);
    }

  useEffect(() => {
    fetchTopRestaurant();
  }, [])


  return (
    <div className='mx-w-[1200px] mx-auto '>

      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'> Top restaurant in Indore</div>

        <div className='flex'>
          <div className=' cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#bdc3c7] rounded-full mx-2'>
            <FaArrowLeft onClick={prevSlide} />
            </div>


          <div className=' cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#bdc3c7] rounded-full mx-2'>
            <FaArrowRight onClick={nextSlide} />
            </div>

        </div>
      </div>

      <div className='overflow-hidden ' >
         <div style={{transform: `translateX(-${slide*100}%)` }} 
          className='flex gap-4 transition-transform duration-500'>
             {
          data.map((NewData, index) => {
            return (
              <Card {...NewData} key={index} />
            )
          })
        }

          </div>
      </div>
      
      <hr  className=' border-[1px]'/>  
    </div>

  )
}

export default TopRest
