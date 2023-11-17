import {TbRectangleVerticalFilled} from "react-icons/tb"
import ProductCard from "./productcard";
import CountDown from "./countdown";
/**
 * 
 * @returns Flash component
 */
function Flash() {
    return (<div className="font-Poppins mt-6">
        <div className="flex items-center">
           <TbRectangleVerticalFilled className="text-buttonPink text-2xl"/>
           <p className="text-buttonPink text-xs ml-2">Today's</p>
        </div>
        <div className="flex mt-4">
        <p className="text-lg font-bold">Flash Sales</p>
        <CountDown className="mr-12"/>
        </div>
        <ProductCard/>
    </div>);
}

export default Flash;