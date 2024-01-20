import { useContext } from 'react';
import Context from '../components/Context';

const Product = ({ id, name, price }) => {
  const { addProduct, removeProduct } = useContext(Context);

  return (
    <div className="product">
      <header className="product-header">
        <p className="product-name">Product: {name}</p>
        <p>|</p>
        <p className="product-price">Price: {price} $</p>
      </header>
      <div className="product-actions">
        <button className="btn btn-add" onClick={() => addProduct(id, price)}>
          Add to cart
        </button>
        <button
          className="btn btn-remove"
          onClick={() => removeProduct(id, price)}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default Product;
