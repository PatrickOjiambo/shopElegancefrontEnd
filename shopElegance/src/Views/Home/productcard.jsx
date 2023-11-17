import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai"
import Rating from '@mui/material/Rating';
/**
 * 
 * @returns ProductCard component
 
 */
function ProductCard() {
const value = 2;
return (<div className="w-40 rounded-lg hover:shadow-lg">

        <div className="bg-inputGray p-4">
            <div className="flex justify-between  items-center">
                <p className="bg-buttonPink rounded-sm text-white text-xs p-1">-40%</p>
                <AiOutlineHeart className="hover:text-buttonPink"/>
            </div>
            <div className="flex mt-2">
                <img src="../images/flash1.png" alt="Funny" className="w-20 h-auto"/>
                <AiOutlineEye className="ml-auto mt-2 hover:text-buttonPink"/>
            </div>
        </div>


        <div className="pt-2 text-xs font-bold px-2">
            <p>Product name</p>
            <div className="flex text-xs my-2">
                <p className="text-buttonPink">$120</p>
                <p className="text-zinc-500 line-through ml-3">$160</p>
            </div>
            <div className="flex items-center pb-2">
                <Rating name="read-only" value={value} size="small" readOnly />
                <p className=" text-zinc-300">(88)</p>
            </div>
        </div>
    </div>);
}

export default ProductCard;