const Summary = ({ state, length }) => {
  const totalPrice = state.reduce((acc, product) => acc + product.price, 0);

  console.log(state);

  return (
    <div className="summary">
      <h1>
        Items in cart: <span className="length">{length}</span>
      </h1>
      <h2>
        Total price: <span className="amount">{String(totalPrice)}$</span>
      </h2>
    </div>
  );
};

export default Summary;
