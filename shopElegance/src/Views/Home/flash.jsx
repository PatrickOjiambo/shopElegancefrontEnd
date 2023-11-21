import { TbRectangleVerticalFilled } from "react-icons/tb"
import CountDown from "./countdown";
import Carousel from "./carousel";
/**
 * 
 * @returns Flash component
 */
function Flash() {
    return (<div className="font-Poppins mt-6">
        <div className="flex items-center">
            <TbRectangleVerticalFilled className="text-buttonPink text-2xl" />
            <p className="text-buttonPink text-xs ml-2">Today's</p>
        </div>
        <div className="flex mt-4">
            <p className="text-lg font-bold">Flash Sales</p>
            <CountDown className="mr-12" />
        </div>
        <div className="flex"><Carousel/>  </div>

    </div>);
}

export default Flash;