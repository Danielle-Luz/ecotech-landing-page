import Slider from "react-slick";
import "./index.css";
import products from "../../data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselArrow from "./carousel-arrow";


const Products = () => {
  return (
    <section id="products" className="horizontal-spacing-2 products">
      <h2 className="title-2">Our products</h2>
      <div  className="slider-container">
        <Slider
          arrows={true}
          infinite= {true}
          speed={500}
          slidesToShow={4}
          slidesToScroll={4}
          initialSlide={0}
          nextArrow={<CarouselArrow to="next" />}
          prevArrow={<CarouselArrow to="prev" previousArrow={true} />}
          responsive={[
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 880,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}
        >
          {
            products.map((product, index) => {
              return (
                <li className="product-card-item" key={index}>
                  <img className="product-image" src={product.image} />
                  <h3 className="title-3">{product.title}</h3>
                  <p className="text-2">{product.description}</p>
                </li>
              )
            })
          }
        </Slider>
      </div>
      
    </section>
  )
}

export default Products;