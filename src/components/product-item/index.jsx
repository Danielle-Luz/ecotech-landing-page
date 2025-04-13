/* eslint-disable react/prop-types */
import "./index.css";

const ProductItem = ({product}) => {
  return (
    <li className="product-card-item">
      <img className="product-image" src={product.image} />
      <h3 className="title-3">{product.title}</h3>
      <p className="text-2">{product.description}</p>
    </li>
  );
}

export default ProductItem;