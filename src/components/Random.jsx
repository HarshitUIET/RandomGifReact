import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


function Random() {


       const {gif,loading,getData} = useGif();

  return (
    <div className="flex flex-col items-center bg-green-400  w-1/2 mt-[25px] justify-center rounded-lg">
      <div className=" uppercase font-bold text-xl mt-[10px]  underline">
        A Random Gif
      </div>
      <div className=" mt-4 mb-3">
        {loading ? <Spinner/>: <img src={gif} width={450} />}
      </div>
      <div className="flex justify-center w-full  ">
        <button onClick={()=>{getData()}} className="rounded-lg bg-yellow-300 w-1/2 mb-3 mt-[10px] py-[2px] ">Generate</button>
      </div>
    </div>
  )
}


export default Random;