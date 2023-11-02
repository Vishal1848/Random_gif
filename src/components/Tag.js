import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
const API_KEYS=process.env.REACT_APP_API_KEY;

function Tag() {
  const [tag,settag]=useState("Car")
  const [gif,setgif]=useState("")
  const [loading ,setLoading]=useState(false)
  async function fetchData(){
    setLoading(true)
    const url=`https://api.giphy.com/v1/gifs/random?api_key=czByMisWjuayVO9FOahhliL15VvvKWXi&tag=&rating=r&&tag=${tag}`
    const {data}=await axios.get(url);
    const imagesource=data.data.images.downsized_large.url;
    setgif(imagesource)
    setLoading(false)
  }
  useEffect(()=>{
   fetchData()
  },[])
  function clickhandler(){
fetchData()
  }
  function changeHandler(event){
   settag(event.target.value)
  }
  return (
    <div className='w-1/2 bg-blue-500 rounded-lg  border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl uppercase underline font-bold'>Random Gif</h1>
      {
        loading ?( <Spinner/>):(<img src={gif} width={450}/>)
      }
      <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' onChange={changeHandler}  value={tag}/>
      
      <button onClick={clickhandler}
      className='w-10/12 bg-white opacity-80 text-lg py-2 rounded-lg mb-[20px]'>
        Generate
        </button>
    </div>
  )
}

export default Tag
