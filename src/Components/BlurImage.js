import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blurhash } from "react-blurhash";



const BlurImage = ({img2}) => {
    const[Loaded,setLoaded]=useState(false)
    const[afterLoaded,setafterLoaded]=useState(false)
const load=()=>{
   setLoaded(true)
}
const before=()=>{
setafterLoaded(true)
}
 // console.log(img)
  return (
    <div>
  <LazyLoadImage src={img2.url}  width='250px' height='250px' beforeLoad={before} onLoad={load}/>
  {!afterLoaded && (
    <>
    <Blurhash  hash={img2.hashValue} width='250px' height='250px'/>  
    </>
  )}   
    </div>
  )
}

export default BlurImage