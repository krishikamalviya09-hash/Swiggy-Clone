import React, { useEffect, useState } from 'react'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";

    function Category(){
    const [categories,setCategories] = useState([]);
    const [slide, setSlide]= useState(0);

     async function fetchCategories(){
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        console.log(data);
        setCategories(data.recipes);
    }
    useEffect(()=>{
        fetchCategories();
    },[]);
    
    function prevSlide(){
        if(slide === 0) return;
        setSlide(slide-2);

    }
    function nextSlide(){
        console.log(categories.length);
        if(categories.length -8 <= slide) return;
        setSlide(slide+2);
    }

  return (
    <div  className='mx-w-[1200px] mx-auto  '>

      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'> What's on your mind?</div>

        <div className='flex'>
            <div  className=' cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#bdc3c7] rounded-full mx-2'><FaArrowLeft  onClick={prevSlide}/></div>
            <div  className=' cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#bdc3c7] rounded-full mx-2'><FaArrowRight onClick={nextSlide}/></div>

        </div>
        </div>
        <div className=' h-[200px] flex gap-2 overflow-x-hidden'>
            {
                categories.map((cat,index)=>{
                    return (
                        <div style={{transform: `translateX(-${slide*100}%)` }} key ={index} className='min-w-[142px] shadow p-4 flex flex-col items-center'>
                            <img  className="w-[120px] h-[120px] object-cover rounded-full" src={cat.image} alt= {cat.name} />
                             <p className="mt-4 text-center font-medium truncate w-[120px]">{cat.name}</p>
                           
                        </div>
                    )

                })
            }
            </div>
            <hr  className='my-3 border-[1px]'/>      
    </div>
  )
}

export default Category
