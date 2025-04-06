import "./index.css";
import products from "../../data/products";

const Products = () => {
  return (
    <section id="products" className="horizontal-spacing-1 products">
      <h2 className="title-2">Our products</h2>
      <ul className="products-cards">
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
      </ul>
    </section>
  )
}

export default Products;