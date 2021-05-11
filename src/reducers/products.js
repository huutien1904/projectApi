var initialState = [
  {
    id: 1,
    name: "iphone 6s",
    price: 500000,
    status: true,
  },
  {
    id: 2,
    name: "iphone XR",
    price: 100000,
    status: false,
  },
  {
    id: 3,
    name: "samsung s10s",
    price: 500000,
    status: true,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
