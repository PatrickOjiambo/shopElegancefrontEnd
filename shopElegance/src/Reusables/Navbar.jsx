import React from "react";
import { useState } from "react";
import About from "../Views/About/About"
import Home from "../Views/Home/Home"
import Contact from "../Views/Contact/Contact"
import Profile from "../Views/Profile/Profile"
import Cart from "../Views/Cart/Cart"
import Signup from "../Views/Auth/Signup"
import {
    Link
} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { FiUser } from "react-icons/fi"
import { BiSearchAlt2 } from "react-icons/bi"
function NavBar() {
    const [searchItem, setSearchItem] = useState('')
    return (<div>
        <ul className="flex justify-around pt-4 font-extralight">
            <li className="font-bold text-lg">Elegance</li>

            <ul className="flex text-base">
                <Link to='/'>

                    <li className="">Home</li>
                </Link>
                <Link to='/about'>

                    <li className="pl-6">About</li>
                </Link>
                <Link to='/contact'>

                    <li className="pl-6">Contact</li>
                </Link>
                <Link to='/signup'>

                    <li className="pl-6">Signup</li>
                </Link>
            </ul>
            <ul className="flex justify-around items-center">
                <div className="relative">
                    <label>
                        <input className="bg-inputGray text-xs border-solid rounded-md h-7 text-left focus:outline-none pl-2" value={searchItem} onChange={e => setSearchItem(e.target.value)} placeholder="What are you looking for" />
                    </label>
                    <div className="absolute top-2 right-2">
                        <BiSearchAlt2 className="relative " />
                    </div>
                </div>
                <Link to='/cart'>

                    <li className="pl-6"><AiOutlineShoppingCart /></li>
                </Link>
                <Link to='/profile'>

                    <li className="pl-6"><FiUser /></li>
                </Link>
            </ul>

        </ul>
    </div>);
}

export default NavBar;