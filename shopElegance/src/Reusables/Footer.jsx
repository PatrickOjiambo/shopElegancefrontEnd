import { useState } from "react";
function Footer() {
    const [email, setEmail] = useState('');
    return (<div>
       <div  className="bg-black text-white text-base flex justify-around absolute bottom-0 w-screen h-auto">
       <div>
            <h2>Exclusive</h2>
            <h3>Subscribe</h3>
            <p>Get 10% off your first order</p>
            <label>
                <input value={email} onChange={e => setEmail(e.target.value)} />

            </label>
        </div>
        <div>
            <p>Support</p>
            <p>Muthithi Rd, 42 Westlands Nairobi</p>
            <p>pashrick237@gmail.com</p>
            <p>+254742220881</p>
        </div>
        <div>
            <p>Account</p>
            <p>Login</p>
            <p>Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>
        <div>
            <p>Quicklink</p>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>FAQ</p>
            <p>Contacts</p>


        </div>
        <div>
            <h2>Download App</h2>
            <div className="flex justify-around">
                <img src="../images/Icon-Facebook.png" />
                <img src="../images/Icon-Twitter.png" />
                <img src="../images/Icon-instagram.png" />
                <img src="../images/Icon-Linkedin.png" />

            </div>
        </div>
       </div>
       <div className="border-solid border-t-zinc-600 bg-black absolute w-screen bottom-0 left-0.5">
        <p className="text-zinc-500 text-center py-2">Copyright Pash 2023. All rights reserved</p>
       </div>
    </div>);
}

export default Footer;