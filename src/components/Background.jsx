import { SiSpeedypage } from "react-icons/si";

const Background = () => {
  return (
    <div className="fixed z-[2] w-full h-screen ">
      <div className='absolute top-[5%] w-full py-10 flex justify-center items-center gap-2 text-zinc-700 text-lg'>
      <span className="text-lg">  <SiSpeedypage /></span> 
       <img src="logo.png" alt="" className="w-20" />
         </div>
      <h1 className='text-[20vh] tracking-tighter absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  font-semibold text-zinc-900 flex items-center '> Docs.</h1>
   
  
    </div>
  )
}

export default Background