import { AiOutlineArrowRight } from "react-icons/ai"
import { BsApple } from "react-icons/bs"
//REACT SLICK TO IMPLEMENT THE SLIDER
function Hero() {
    return (<div className="flex pt-4">
        <ul className="border-r border-zinc-500 text-xs font-Poppins pr-2 pl-2">
            <li className="mb-2">Woman’s Fashion</li>
            <li className="mb-2">Men’s Fashion</li>
            <li className="mb-2">Electronics</li>
            <li className="mb-2">Home & Lifestyle</li>
            <li className="mb-2">Medicine</li>
            <li className="mb-2">Sports & Outdoor</li>

            <li className="mb-2">Baby’s & Toys</li>
            <li className="mb-2">Groceries & Pets</li>
            <li className="mb-2">Health & Beauty</li>
        </ul>
        <div className="ml-20 w-[40rem] h-[11rem] flex text-white bg-black justify-around rounded-sm items-center">
            <div className="pt-4 font-bolt">
                <div className="flex">
                    <BsApple />
                    <h5 className="text-sm pl-2">Iphone 14 Series</h5>
                </div>
                <p className="text-lg">Upto 10%</p>
                <p className="text-lg">Off voucher</p>
                <div className="font-bold flex items-center">
                    <p className="underline font-extralight">Shop Now</p>
                    <AiOutlineArrowRight />
                </div>
            </div>
            <img src="../images/Hero.png" alt="Hero Image" className=" w-[15rem]" />
        </div>
    </div>);
}

export default Hero;