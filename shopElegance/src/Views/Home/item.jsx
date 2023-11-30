import { useParams, useLoaderData } from 'react-router-dom';
import axios from "axios";
    /**
     * Loader function for the items
     */
    const itemLoader = async (id) => {
        const response = await axios.post("http://localhost:4267/register", {
            product_id: id
        });
    }
   
/**
 * 
 * @param {Object} item 
 * @returns Item component - item to be added to cart
 */
const Item = () => {
    const data = useLoaderData();
    
    let { id } = useParams();
    itemLoader(id);
    return (
        <div>

            <img src="../images/flash2.png" />
            <section>
                <p>{item.name}</p>
                <div className="flex">
                    <p>${item.amount}</p>
                    <p>$1400</p>
                    <p>{item.discount}</p>
                </div>
                <p>In stock</p>
                <div className="flex items-center pb-2">
                    <Rating name="read-only" value={value} size="small" readOnly />
                    <p className=" text-zinc-300">({item.comments_count})</p>
                </div>
            </section>
        </div>);
}

export { Item, itemLoader };
