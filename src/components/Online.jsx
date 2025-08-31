import React, { useEffect, useState } from 'react'
import Card from './Card';

const Online = () => {
      const [data, setData] = useState([]);
    
      async function fetchTopRestaurant() {
        const response = await fetch("https://dummyjson.com/recipes");
        const apiData = await response.json();
        console.log(apiData);
        setData(apiData.recipes);
      }
    
      useEffect(() => {
        fetchTopRestaurant();
      }, [])
    
  return (
     <div className='mx-w-[1200px] mx-auto'>

      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>Restaurants with online food delivery in Indore</div>
        

      </div>
      <div>
          <div className='flex gap-3 sticky top-0 bg-white z-20 py-3 shadow-md'>
            <div className='p-3 rounded-md shadow'>Filter</div>
             <div className='p-3 rounded-md shadow ml-2'>Sort</div>

          </div>
        </div>
      <div className='grid grid-cols-4 gap-3 mt-4'>
        {
          data.map((NewData,index)=>{
            return(
              <Card{...NewData} key = {index}/>
            )
           
          })
        }

      </div>
       <hr  className='my-3 border-[1px]'/>  
    </div>

  )
}

export default Online
