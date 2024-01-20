import Context from './components/Context';
import ProductList from './components/ProductList';
import Summary from './components/Summary';
import { useReducer } from 'react';

const ACTIONS = {
  ADD_PRODUCT: 'add-product',
  REMOVE_PRODUCT: 'remove-product',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return [...state, { id: action.payload.id, price: action.payload.price }];

    case ACTIONS.REMOVE_PRODUCT:
      // eslint-disable-next-line no-case-declarations
      const indexToRemove = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (indexToRemove !== -1) {
        const newState = [...state];
        newState.splice(indexToRemove, 1);
        return newState;
      }
      return state;
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  function addProduct(id, price) {
    dispatch({
      type: ACTIONS.ADD_PRODUCT,
      payload: { id: id, price: price },
    });
  }

  function removeProduct(id, price) {
    dispatch({
      type: ACTIONS.REMOVE_PRODUCT,
      payload: { id: id, price: price },
    });
  }

  return (
    <div className="app">
      <Context.Provider value={{ addProduct, removeProduct }}>
        <Summary length={state.length} state={state} />
        <ProductList />
      </Context.Provider>
    </div>
  );
};

export default App;
