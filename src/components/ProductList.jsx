import Product from './Product';

const data = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Mobile', price: 325 },
  { id: 3, name: 'Monitor', price: 449 },
  { id: 4, name: 'Mouse', price: 87 },
  { id: 5, name: 'Keyboard', price: 125 },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {data.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
