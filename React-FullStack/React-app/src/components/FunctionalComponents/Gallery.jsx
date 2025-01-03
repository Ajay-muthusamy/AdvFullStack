import React, { useState } from 'react'

const Gallery = () => {
  const[data,setdata]=useState(0)
  async function handleDecrease(){
    if(data > 0){
      setdata(data - 1)
    }
    
  }
  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:"40px"}}>Learning State</h1>
      <h1>State is nothing but a variable</h1>
      <h1>{data}</h1>
      <button onClick={()=>setdata(data+1)}>Increase</button>
      <button onClick={()=>handleDecrease()}>Decrease</button>
    </div>
  )
}

export default Gallery
