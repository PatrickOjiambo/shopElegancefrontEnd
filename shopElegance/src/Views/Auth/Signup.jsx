import { useState } from "react";
import {
    Link, useNavigate
} from "react-router-dom";
function Signup() {
    const [details] = useState({
        email: "",
        phone: "",
        password: "",
        name: ""
    })
    function handleChange(event) {
        setLoginDetails(prevDetails => ({
            ...prevDetails,
            [event.target.name]: event.target.value
        }))

    }
    const navigate = useNavigate()
    const handleclick=()=>{
        navigate("/login")
    }
    return (<div className="mt-3 flex items-center">
        <div className="">
            <img src="../images/loginImage.png" alt="login Image" className="w-[30rem] h-[25rem]" />
        </div>
        <div className="mx-auto  gap-4">
            <p className="text-base">Create an account</p>
            <p className="text-xs mt-2">Enter your details below</p>
            <label className="block mt-3 ">
                <input value={details.name} onChange={handleChange} placeholder="Name" className="border-b focus:outline-none text-xs " />
            </label>
            <label className="block text-xs mt-3">
                <input value={details.email} onChange={handleChange} placeholder="Email" className="border-b focus:outline-none text-xs" />

            </label>
            <label className="block text-xs mt-3">
                <input value={details.phone} onChange={handleChange} placeholder="Phone Number" className="border-b focus:outline-none text-xs" />
            </label>
            <label className="block text-xs mt-3">
                <input value={details.password} onChange={handleChange} placeholder="Password" className="border-b focus:outline-none text-xs" />
            </label>

            <button className="bg-buttonPink text-white text-xs text-center px-3 py-1 rounded-sm mt-2 w-full">Create Account</button>
            <div className="text-xs flex mt-2">
                <p className="">Already have an account? </p>
                
                    <p className="inline pl-2 underline hover:text-pink-500" onClick={handleclick}>Log In</p>
               
            </div>

        </div>
    </div>);
}

export default Signup;