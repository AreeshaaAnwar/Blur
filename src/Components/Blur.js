import React, { useState } from 'react'
import { useEffect } from 'react';
import BlurImage from './BlurImage';

const Blur = () => {
const [image,setImage]=useState([])
const[isLOaded,setisLoaded]=useState(false)
const fetchData=()=>{
    let data =  fetch("http://localhost:3000/Data");
      data
        .then((aree) => {
          return  aree.json();
        })
        .then((res) => {
        
          setImage(res)
          
          console.log(res);
})
}
useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
  
{
image && (image.map((a,index)=>(
    <div key={index}>
    {/* <img src={a.url} alt='a' style={{width:'250px',height:'100px'}}/> */}
    <BlurImage img2={a}/>
    
    </div>
)))
}
    </div>
  )
}

export default Blur

// import React, { useState } from 'react'

// import { useFetch } from '../hooks/UseFetch'


// const Blur = () => {
  
//   let url=('http://localhost:3000/Data')
//   let {data,pending,error}=useFetch(url,'GET')

//   console.log(data,"aaaa")
//   return (
//     <div className='recipe'>
       
//    {error && <p className='error'>{error}</p>}
//    {pending && <p className='loading'>Loading...</p>}
   
//    {data && (
//     <>
//   {}
     
 
//     </>
//    )
//     }
//    </div>
   
//   )
// }

// export default Blur