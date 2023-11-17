import { useState } from "react";
import axios from "axios";
/**
 * 
 * @returns Login Component
 */
function Login() {
    const [loginDetails, setLoginDetails] = useState({
        log_details: '',
        password: ''
    })

    function handleChange(event) {
        setLoginDetails(prevDetails => ({
            ...prevDetails,
            [event.target.name]: event.target.value
        }))

    }
    async function handleLogin() {
        try{
            const response  = axios.post("http://localhost:4267/login", {
            log_details: loginDetails.log_details,
            password: loginDetails.password
        })
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
            <p className="text-base">Login to Elegance</p>
            <p className="text-xs mt-2">Enter your details below</p>
            <label className="block mt-3 ">
                <input value={loginDetails.log_details} name="log_details" onChange={handleChange} placeholder="Enter Email or Phone number" className="border-b focus:outline-none text-xs " />
            </label>
            <label className="block text-xs mt-3">
                <input value={loginDetails.password} name="password" onChange={handleChange} placeholder="Enter Password" className="border-b focus:outline-none text-xs" />

            </label>


            <div className="flex">
                <button className="bg-buttonPink text-white text-xs text-center px-3 py-1 rounded-sm mt-2 w-full" onClick={handleLogin}>Log In</button>

                <p className="inline pl-2 underline text-red-400 hover:text-pink-500">Forgot password?</p>

            </div>
        </div>
    </div>);
}

export default Login;