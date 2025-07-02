import axios from "axios"
import { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    
    axios.get("http://localhost:5000/news")
    .then(res=> setNews(res.data))
    .catch(err=> console.log(err))
  }, [])
  

  return (
    <div className="w-screen h-screen overflow-x-hidden space-y-10 my-20">
      {
        news.map((data, index)=> {
          return(
            <div key={index} className="w-[75%] mx-auto">
              <div className="max-w-full p-5 shadow-xl hover:shadow-2xl space-y-5">
                <p className="font-bold text-[#1c2b4a] font-Lato text-xl">{data.title}</p>
                <p className="text-[#1c2b4a]">{data.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default News