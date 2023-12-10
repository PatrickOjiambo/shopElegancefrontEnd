import { useState, useEffect } from "react";
import Button from '@mui/material/Button';

function Cart() {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const cart = localStorage.getItem("cartItems");
        if (cart) {
            setCart(JSON.parse(cart));
        }
    }, []);

    return (<div className="">{cart.length != 0  ?<div>
        <table className="table-auto">
        <thead className="border-b font-medium dark:border-neutral-500">
            <tr className="font-Poppins font-extralight ">
                <th className="px-6 py-4">Product</th>
             
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Quantity</th>
                <th className="px-6 py-4">Subtotal</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((item) => (
                <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.price}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.quantity}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.price * item.quantity}</td>
                </tr>

            ))}
        </tbody>
    </table>
    <div className="border-2 border-black p-4 max-w-xl">
        <h1>Cart Total</h1>
        <section className="flex justify-between"><p>Subtotal</p>
            <p>${cart.reduce((total, product) => total + product.price * product.quantity, 0)}</p></section>
            <section className="flex justify-between">
                <p>Shipping</p>
                <p>Free</p>
            </section>
        <section className="flex justify-between pb-2">
            <h1>Total</h1>
            <p>${cart.reduce((total, product) => total + product.price * product.quantity, 0)}</p>
        </section>
        <Button size='large' variant="contained" >Checkout</Button>
    </div></div> : <div className="flex items-center max-w-3xl bg-slate-300 h-screen p-4">
        <section>
        <p className="font-light">Buzzkill alert</p>
        <h1 className="text-2xl font-Poppins font-semibold pt-2">There is nothing in your cart.</h1>
        <p className="font-light pt-2 pb-3"> All this stellar refurb isn't gonna shop itself! </p>

        <Button size='large' variant="contained" >Browse sweet deals</Button>
        </section>
        <img src="../images/empty-cart.png" className="h-48"/>
        </div>}
       
    </div>)
        ;
}

export default Cart;