import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { TfiDownload } from "react-icons/tfi";
import { VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion"






const Card = ({data,refrence}) => {
  return (
    <motion.div drag dragConstraints={refrence} className="overflow-hidden relative w-60 py-10 px-6 h-72 rounded-[50px] bg-zinc-900/80 text-white" >
{/* icon */}


<BsFileEarmarkSpreadsheet />

{/* text */}
<p className="text-sm font-semibold mt-4 leading-tight"> {data.disc}</p>


{/* footor 
    > tag
    > data
*/}
<div className=" absolute bottom-0 left-0 w-full   ">
    <div className="flex items-center justify-between py-3 mb-2 px-8 ">
        <h1 className="text-sm">{data.filesize}</h1>
        <span className="text-xs bg-zinc-500 p-2 rounded-full ">
        {data.close ?   <VscChromeClose /> : <TfiDownload /> }
    
        </span>
        
    </div>

    
    <div className={`w-full  ${data.tag.isOpen ? 'bg-green-600': "bg-blue-600" }  py-3 flex justify-center items-center `}>
            <h3 className="text-md font-semibold">{data.tag.isOpen &&     'Download Now' }</h3>
    </div>
</div>


    </motion.div>
  )
}

export default Card