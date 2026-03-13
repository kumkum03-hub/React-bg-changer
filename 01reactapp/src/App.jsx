import { useState } from 'react'

function App() {
  
 const [color,setColor] = useState("pink")

  return (
   <div className="w-full h-screen duration-300" style={{backgroundColor : color}}>

    <div className="fixed flex flex-wrap bottom-12  justify-center inset-x-0 px-2">
      <div className="bg-amber-50 flex flex-wrap justify-center rounded-3xl px-3 py-2 gap-3 shadow-amber-800">
        <button className="bg-red-500 px-4 py-2 text-amber-50 rounded-xl shadow-black " onClick={() => setColor("Red")}>Red</button>
        <button className="bg-amber-300 px-4 py-2  rounded-xl shadow-black " onClick={() => setColor("Yellow")}>Yellow</button>
        <button className="bg-amber-500 px-4 py-2  rounded-xl shadow-black " onClick={() => setColor("Orange")}>Orange</button>
        <button className="bg-blue-700 px-4 py-2 text-amber-50 rounded-xl shadow-black " onClick={() => setColor("Blue")}>Blue</button>
        <button className="bg-black px-4 py-2 text-amber-50 rounded-xl shadow-black " onClick={() => setColor("Black")}>Black</button>
        
        
      </div>
    </div>
   </div>

    
  )
}

export default App
