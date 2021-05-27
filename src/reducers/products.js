import * as Types from "./../constants/ActionType";
var initialState = [];
const findIndex = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
};
const product = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      var index = findIndex(state, action.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    case Types.ADD_PRODUCT:
      var product = {
        name: action.name,
        price: action.price,
        status: action.status,
      };
      state.push(product);
      return [...state];
    case Types.UPDATE_PRODUCT:
      var product = {
        id: action.id,
        name: action.name,
        price: action.price,
        status: action.status,
      };
      state.push(product);
      return [...state];
    default:
      return [...state];
  }
};

export default product;
