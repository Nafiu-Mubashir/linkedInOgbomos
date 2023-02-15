import { AiOutlineArrowRight } from "react-icons/ai";

export const Button = ({text, className, type }) => {

    return(
        type === 'outline' ? 
        <button type="button" className={`${className} text-[#0A66C2] bg-white border-[#0A66C2] border focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2 flex gap-3 items-center`}>
        <p>{text} </p>
        <AiOutlineArrowRight />
     </button>
        
       :
       
       <button type="button" className={`${className} text-white bg-[#0A66C2] focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2 flex gap-3 items-center`}>
          <p>{text} </p>
          <AiOutlineArrowRight />
       </button>
    )
}