import { useParams, useLoaderData } from 'react-router-dom';
import axios from "axios";
import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import {AiOutlineShoppingCart} from "react-icons/ai"


const itemLoader = ({params}) =>{
    return axios.get(`http://localhost:4267/products/${params.product_id}`)
    .then((res) => {
      
        return {
            product: res.data
        }
    })
    .catch((err) => {
        console.log(err)
    })

}


/**
 * 
 * @param {Object} item 
 * @returns Item component - item to be added to cart
 */
const Item = () => {

    let params = useParams();
    let todo = useLoaderData();
    console.log(todo);
    const [product, setProduct] = useState(todo.product.product);
    
    
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
                <Button size='large' variant="contained" startIcon={<AiOutlineShoppingCart/>}>Add to Cart</Button>
            </section>
        </div>);
}

export { Item, itemLoader };
