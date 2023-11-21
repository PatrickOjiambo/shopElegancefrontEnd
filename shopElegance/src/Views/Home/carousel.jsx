import Slider from "react-slick";
import ProductCard from "./productcard";
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
    return (<div>
      
        <Slider {...settings}>
           <ProductCard/>
        </Slider>
      </div>);
}

export default Carousel;