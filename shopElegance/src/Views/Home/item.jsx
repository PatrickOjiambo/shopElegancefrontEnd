import { useParams, useLoaderData} from 'react-router-dom';
import axios from "axios";
import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { AiOutlineShoppingCart } from "react-icons/ai"

/**
 * 
 * @param {*} param0 
 * @returns product object
 */
const itemLoader = async ({ params }) => {
    try {
        const res = await axios.get(`http://localhost:4267/products/${params.product_id}`);
        return {
            product: res.data
        };
    } catch (err) {
        console.log(err);
    }
};

/**
 * 
 * @param {Object} item 
 * @returns Item component - item to be added to cart
 */
const Item = () => {
    const params = useParams();
    const prod = useLoaderData();
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(prod.product.product);
    }, [prod]);

    /**
     * 
     * @param {Object} product 
     */
    const handleAddToCart = (product) => {
        //check if the item is already in the cart
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === product.id);
        if (isItemInCart) {
            //If the item is already in cart, increase the quantity of the item
            setCartItems(cartItems.map((cartItem) => cartItem.id === product.id ? { ...isItemInCart, quantity: isItemInCart.quantity + 1 } : cartItem))
        } else {
            //If the item is not in the cart, add it to the cart
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
        console.log("Item added to cart")
        console.log(cartItems)
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
       
    }, [cartItems])

    if (!product) {
        return null; // or show a loading spinner
    }

    return (
        <div className='flex justify-between mx-auto p-5 max-w-xl items-center shadow-md '>
            <img src={product.image} className='w-auto' />
            <section>
                <p className='font-bold'>{product.name}</p>
                <div className="">
                    <p className='mt-2'>${product.price}.00</p>
                    <p className='text-base mt-4'>{product.description}</p>
                </div>
                <p>In stock</p>
                <div className="flex items-center pb-2">
                    <Rating name="read-only" value={product.rating} size="small" readOnly />
                    <p className=" text-zinc-300">(product.comments_count)</p>
                </div>
                <Button size='large' variant="contained" startIcon={<AiOutlineShoppingCart />} onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </section>
        </div>
    );
}

export { Item, itemLoader };
//     /**
//   * 
//   * @param {Object} product 
//   */
//     const handleAddToCart = (product) => {
//         //check if the item is already in the cart
//         const isItemInCart = cartItems.find((cartItem) => cartItem.id === product.id);
//         if(isItemInCart){
//             //If the item is already in cart, increase the quantity of the item
//             setCartItems(cartItems.map((cartItem) => cartItem.id === product.id ? {...isItemInCart, quantity: isItemInCart.quantity + 1} : cartItem))
//         }
//             else{
//                 //If the item is not in the cart, add it to the cart
//                 setCartItems([...cartItems, {...product, quantity: 1}])
                
//             }     
//     }
//     useEffect(() => {
//         localStorage.setItem('cartItems', JSON.stringify(cartItems))
//     }, [cartItems])


//     return (
//         <div className='flex justify-between mx-auto p-5 max-w-xl items-center shadow-md '>

//             <img src={product.image} className='w-auto' />
//             <section>
//                 <p className='font-bold'>{product.name}</p>
//                 <div className="">
//                     <p className='mt-2'>${product.price}.00</p>
//                     <p className='text-base mt-4'>{product.description}</p>
//                 </div>
//                 <p>In stock</p>
//                 <div className="flex items-center pb-2">
//                     <Rating name="read-only" value={product.rating} size="small" readOnly />
//                     <p className=" text-zinc-300">(product.comments_count)</p>
//                 </div>
//                 <Button size='large' variant="contained" startIcon={<AiOutlineShoppingCart />} onClick={handleAddToCart(product)} >Add to Cart</Button>
//             </section>
//         </div>);
// }

// export { Item, itemLoader };
