import "./index.css";
import products from "../../data/products";
import { useRef } from "react";
import ProductItem from "../product-item";


const Products = () => {
  const productsList = useRef();

  const scrollDirection = {
    left: -1,
    right: 1
  }

  const scrollProducts = (horizontalAxis) => {
    const scrollAmount = 300;
    productsList.current.scrollTo(scrollAmount * horizontalAxis, 0);
  } 

  return (
    <section id="products" className="horizontal-spacing-2 products">
      <h2 className="title-2">Our products</h2>
      <div className="products-card-wrapper">
        <button onClick={() => scrollProducts(scrollDirection.left)}>
          <img className="product-arrow mirror" src="https://img.icons8.com/ios/333333/300/circled-chevron-right--v1.png" />
        </button>
        <ul className="products-cards" ref={productsList}>
        {
          products.map((product, index) => {
            return (
              <ProductItem key={index} product={product} />
            )
          })
        }
        </ul>
        <button onClick={() => scrollProducts(scrollDirection.right)}>
          <img className="product-arrow" src="https://img.icons8.com/ios/333333/300/circled-chevron-right--v1.png" />
        </button>
      </div>
      
    </section>
  )
}

export default Products;