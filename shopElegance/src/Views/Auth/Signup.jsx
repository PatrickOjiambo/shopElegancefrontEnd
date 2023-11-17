import { useState } from "react";
import axios from "axios";
import {
    Link, useNavigate
} from "react-router-dom";
function Signup() {
    const [details, setDetails] = useState({
        email: "",
        phone: "",
        password: "",
        name: ""
    })
    function handleChange(event) {
        setDetails(prevDetails => ({
            ...prevDetails,
            [event.target.name]: event.target.value
        }))
console.log(details)
    }
    const navigate = useNavigate()
    const handleclick=()=>{
        navigate("/login")
    }
    
    async function handleSignup(){
        try{
            const response = await axios.post("http://localhost:4267/register",{
                name:details.name,
                email:details.email,
                phone_number:details.phone,
                password:details.password
            })
            console.log(response)
        }
       catch(error){
           console.log(error)
       }
    }

    return (<div className="mt-3 flex items-center">
        <div className="">
            <img src="../images/loginImage.png" alt="login Image" className="w-[30rem] h-[25rem]" />
        </div>
        <div className="mx-auto  gap-4">
            <p className="text-base">Create an account</p>
            <p className="text-xs mt-2">Enter your details below</p>
            <label className="block mt-3 ">
                <input value={details.name} name="name" onChange={handleChange} placeholder="Name" className="border-b focus:outline-none text-xs " />
            </label>
            <label className="block text-xs mt-3">
                <input value={details.email} name="email" onChange={handleChange} placeholder="Email" className="border-b focus:outline-none text-xs" />

            </label>
            <label className="block text-xs mt-3">
                <input value={details.phone} name="phone" onChange={handleChange} placeholder="Phone Number" className="border-b focus:outline-none text-xs" />
            </label>
            <label className="block text-xs mt-3">
                <input value={details.password} name="password" onChange={handleChange} placeholder="Password" className="border-b focus:outline-none text-xs" />
            </label>

            <button className="bg-buttonPink text-white text-xs text-center px-3 py-1 rounded-sm mt-2 w-full" onClick={handleSignup}>Create Account</button>
            <div className="text-xs flex mt-2">
                <p className="">Already have an account? </p>
        
                    <p className="inline pl-2 underline hover:text-pink-500" onClick={handleclick}>Log In</p>
               
            </div>

        </div>
    </div>);
}

export default Signup;