import { useState } from "react";
import { AiOutlineCopyrightCircle, AiOutlineSend, AiOutlineInstagram } from "react-icons/ai"
import { RiFacebookLine } from "react-icons/ri"
import { FaLinkedin } from "react-icons/fa"
import {FiTwitter} from "react-icons/fi"
function Footer() {
    const [email, setEmail] = useState('');
    return (<div className="text-sm font-light h-auto pt-4 bottom-0 absolute">
        <div className="bg-black text-white flex justify-around w-screen h-auto">
            <div>
                <h2 className="text-sm">Elegance</h2>
                <h3>Subscribe</h3>
                <p>Get 10% off your first order</p>
                <div className="relative bg-black">
                    <label className="flex items-center">
                        <input value={email} placeholder="Enter your email" onChange={e => setEmail(e.target.value)} className="bg-black border-solid border-white rounded-sm text-gray-500 w-48 py-2 pl-2" />

                    </label>
                    <div className="absolute top-2 right-2">
                        <AiOutlineSend className="relative" />
                    </div>
                </div>
            </div>
            <div>
                <p className="text-sm">Support</p>
                <p>Muthithi Rd, 42 Westlands Nairobi</p>
                <p>pashrick237@gmail.com</p>
                <p>+254742220881</p>
            </div>
            <div>
                <p className="text-sm">Account</p>
                <p>Login</p>
                <p>Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>
            <div>
                <p className="text-sm">Quicklink</p>
                <p>Privacy Policy</p>
                <p>Terms of use</p>
                <p>FAQ</p>
                <p>Contacts</p>


            </div>
            <div>
                <h2 className="text-sm">Download App</h2>
                <div className="flex justify-around">
                    <RiFacebookLine />
                    <FiTwitter/>
                    <AiOutlineInstagram />
                    <FaLinkedin />

                </div>
            </div>
        </div>
        <div className="border-solid border-t-zinc-600 bg-black w-screen bottom-0 left-1 flex justify-center items-center">
            <AiOutlineCopyrightCircle className="text-zinc-500" />

            <p className="text-zinc-500 text-center py-2 pl-2">Copyright Pash 2023. All rights reserved</p>
        </div>
    </div>);
}

export default Footer;