import {TbRectangleVerticalFilled} from "react-icons/tb"
import test from "./test"
import ProductCard from "./productcard";
function Products() {
    /**
     * Handle add to cart
     * @param {String} product_id 
     */
    const handleAddToCart = (product_id) => {
        console.log(product_id)
    }
    /**
     * Handle add to cart
     * @param {String} product_id 
     */
    const handleAddToWishlist = (product_id) => {
        console.log(product_id)
    }

    const productItem = test.map((item) => {
        return <ProductCard key={item.id} prodname={item.name} amount={item.amount}
        comments_count={item.comments_count} discount={item.discount}
        />
    })
    // TODO Pass handleAddTocart to ProductCard
    return (<div>
         <div className="flex items-center">
           <TbRectangleVerticalFilled className="text-buttonPink text-2xl"/>
           <p className="text-buttonPink text-xs ml-2">Today's</p>
        </div>
        <div className=" grid col-auto grid-cols-4 gap-y-px col-start-4">
            {productItem}
        </div>
    </div>);
}

export default Products;