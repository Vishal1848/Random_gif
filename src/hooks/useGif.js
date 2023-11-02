import React from 'react'

function useGif() {
    const [tag,settag]=useState("")
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
   
}

export default useGif
