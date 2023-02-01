import { AiOutlineArrowRight } from "react-icons/ai";

export const Button = ({text, className }) => {

    return(
        <button type="button" className={`${className} text-white bg-[#0A66C2] focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2 flex gap-3 items-center`}>
          <p>{text} </p>
          <AiOutlineArrowRight />
       </button>
    )
}