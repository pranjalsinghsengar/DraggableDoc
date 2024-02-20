import { useRef } from "react"
import Card from "./Card"


const Foreground = () => {
   const forRef = useRef()

    const data = [
        {disc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit." ,
         filesize:'.9mb', 
         close: true, 
         tag:{isOpen:false,
             tagTitle:"Download Now", 
             tagColor:"green"
            }},
        {disc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit." ,
         filesize:'.9mb', 
         close: true, 
         tag:{isOpen:false,
             tagTitle:"Download Now", 
             tagColor:"green"
            }},
        {disc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit." ,
         filesize:'.9mb', 
         close: true, 
         tag:{isOpen:true,
             tagTitle:"Download Now", 
             tagColor:"green"
            }},
        {disc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit." ,
         filesize:'.9mb', 
         close: true, 
         tag:{isOpen:false,
             tagTitle:"Download Now", 
             tagColor:"green"
            }},
    ]
  return (
    <div ref={forRef} className='relative overflow-hidden top-0 left-0 z-[3] w-full h-full flex flex-wrap flex-shrink-0 gap-5 p-5'>
      {/* <Card/> */}

      {data.map((item, index ) => 
        (
            <Card data={item} key={index} refrence={forRef}/>
        )
      )}
    </div>
  )
}

export default Foreground