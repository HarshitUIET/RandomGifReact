import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


function Tag() {

   const [tag,setTag] = useState("car");
   const {gif,loading,getData} = useGif(tag);



    
  return (
    <div className="flex flex-col items-center bg-blue-400  w-1/2 mt-[25px] justify-center rounded-lg">
      <div className=" uppercase font-bold text-xl mt-[10px]  underline">
        A Random {tag} Gif
      </div>
      <div className=" mt-4 mb-3">
        {loading ? <Spinner/>: <img src={gif} width={450} />}
      </div>
      <div className="flex justify-center w-full  ">
       <input type="text" className=" text-center rounded-lg bg-white w-1/2 mt-[10px] py-[2px]" onChange={(event)=>{setTag(event.target.value)}}/>
      </div>
      <div className="flex justify-center w-full  ">
        <button onClick={()=>{getData(tag)}} className="rounded-lg bg-yellow-300 w-1/2 mb-3 mt-[10px] py-[2px] ">Generate</button>
      </div>
    </div>
  )
}


export default Tag;