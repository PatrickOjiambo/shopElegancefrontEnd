import Slider from "react-slick";
import ProductCard from "./productcard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import test from "./test"
/**
 * 
 * @returns Carousel component
 
 */
function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialsSlide: 0,
        
      };
      const productItem = test.map((item) => {
        return <ProductCard key={item.id} prodname={item.name} amount={item.amount}
        comments_count={item.comments_count} discount={item.discount}
        />
      })
    return (<div>
      
        <Slider {...settings} >
           {productItem}
        </Slider>
      </div>);
}

export default Carousel;