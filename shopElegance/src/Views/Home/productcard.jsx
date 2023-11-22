import { AiOutlineHeart } from "react-icons/ai"
import { MdOutlineShoppingCart } from "react-icons/md";
import React, { useState } from "react";
import Rating from '@mui/material/Rating';
/**
 * 
 * @returns ProductCard component
 
 */
function ProductCard(props) {
    // const [isHovered, setIsHovered] = useState(false);
    // const handleMouseEnter = () => {
    //     setIsHovered(true);

    // }
    // const handleMouseLeave = () => {
    //     setIsHovered(false);


    // }

    const value = 2;
    return (
        <div className="w-56 rounded-lg hover:shadow-lg relative"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >

            <div className="bg-inputGray p-4">
                <div className="flex justify-between  items-center">
                    <p className="bg-buttonPink rounded-sm text-white text-xs p-1">-{props.discount}%</p>
                    <AiOutlineHeart className="hover:text-buttonPink" />
                </div>
                <div className="flex mt-2 justify-center">
                    {/* {
                        isHovered && (<button
                            onClick={props.onAddToCart}
                            className="text-white p-1"
                        >
                            <MdOutlineShoppingCart className="text-white" />
                            Add to cart
                        </button>)
                    } */}
                    <img src="../images/flash1.png" alt="Funny" className="w-20 h-auto" />

                </div>
            </div>


            <div className="pt-2 text-base font-bold px-2">
                <p>{props.prodname}</p>
                <div className="flex text-base my-2">
                    <p className="text-buttonPink">${props.amount}</p>
                    <p className="text-zinc-500 line-through ml-3">$160</p>
                </div>
                <div className="flex items-center pb-2">
                    <Rating name="read-only" value={value} size="small" readOnly />
                    <p className=" text-zinc-300">({props.comments_count})</p>
                </div>
            </div>


        </div>);
}

export default ProductCard;