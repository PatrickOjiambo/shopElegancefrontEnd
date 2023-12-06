import { TbRectangleVerticalFilled } from "react-icons/tb"
import ProductCard from "./productcard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Products() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:4267/products")
            .then((res) => {
                setProducts(res.data.products)
            })

            .catch((err) => {
            })
    }, [])

    /**
     * Handle add to cart
     * @param {Object} item 
     */
    const handleProductClick = (item) => {
        navigate(`/${item.id}`, { state: item })
    }
    /**
     * Handle add to cart
     * @param {String} product_id 
     */
    const handleAddToWishlist = (product_id) => {
    };

    const productItem = Array.isArray(products) ? products.map((item) => {
        return (
            <ProductCard
                key={item.id}
                url={item.image}
                prodname={item.name}
                rating={item.rating}
                amount={item.price}
                comments_count={item.comments_count}
                discount={item.discount}
                onProductClick={() => handleProductClick(item)}
                onAddToWishlist={() => handleAddToWishlist(item.id)} // Added this line
            />
        );
    }) : null;

    return (
        <div>
            <div className="flex items-center">
                <TbRectangleVerticalFilled className="text-buttonPink text-2xl" />
                <p className="text-buttonPink text-xs ml-2">Our products</p>
            </div>
            <div className="grid col-auto grid-cols-4 gap-y-px col-start-4">
                {productItem}
            </div>
        </div>
    );
}
export default Products;