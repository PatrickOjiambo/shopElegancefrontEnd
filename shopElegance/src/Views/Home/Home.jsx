import Hero from "./Hero";
import Flash from "./flash"
import Products from "./products"
function Home() {
    return (<div>
        <Hero />
        <Flash />
        <div className="flex justify-center">
            <button className="bg-buttonPink text-white text-xs rounded-sm px-4 py-2 mt-4 ">View All Products</button>
        </div>
        <Products />
    </div>);
}

export default Home;