import React from "react";
import { useState } from "react";
import {
    NavLink} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { FiUser } from "react-icons/fi"
import { BiSearchAlt2 } from "react-icons/bi"
function NavBar() {

    const [searchItem, setSearchItem] = useState('')
    return (<div className="border-b pb-4">
        <ul className="flex justify-around pt-4 font-extralight">
            <li className="font-bold text-lg">Elegance</li>

            <ul className="flex text-base">
                <NavLink to='/'>
                {/* style={({ isActive }) => (isActive ? activeLink : null)} */}
                    <li className="hover:underline">Home</li>
                </NavLink>
                <NavLink to='/about'>

                    <li className="pl-6 hover:underline">About</li>
                </NavLink>
                <NavLink to='/contact'>

                    <li className="pl-6 hover:underline">Contact</li>
                </NavLink>
                <NavLink to='/signup'>

                    <li className="pl-6 hover:underline">Signup</li>
                </NavLink>
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
                <NavLink to='/cart'>

                    <li className="pl-6"><AiOutlineShoppingCart /></li>
                </NavLink>
                <NavLink to='/profile'>

                    <li className="pl-6"><FiUser /></li>
                </NavLink>
            </ul>

        </ul>
    </div>);
}

export default NavBar;