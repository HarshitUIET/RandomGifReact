import Random from "./components/Random";
import Tag from "./components/Tag";


 function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className=" uppercase font-bold text-3xl w-11/12 text-center bg-white mt-[25px] rounded-lg ">
         Random Gifs
      </div>
      <div className=" flex flex-col items-center justify-center w-full">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
 }

 export default App;
