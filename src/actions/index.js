import * as Types from "./../constants/ActionType";
import callApi from "./../utils/apiCaller";
import axios from "axios";

// lấy dữ liệu từ server và dispatch lưu dữ liệu vào store
export const actFetchProductsRequest = () => {
  return (dispatch) => {
    callApi("products", "GET", null).then((reponse) => {
      dispatch(actFetchProducts(reponse.data));
    });
  };
};

export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    products,
  };
};
//delete

export const actDeleteRequest = (id) => {
  return (dispatch) => {
    axios({
      method: "delete",
      url: `http://localhost:3000/products/${id}`,
      data: {},
    }).then((repon) => {
      dispatch(actDeleteProducts(id));
    });
  };
};

export const actDeleteProducts = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id,
  };
};

// add product

export const actAddProductRequest = (name, price, status) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "http://localhost:3000/products",
      data: {
        name: name,
        price: price,
        status: status,
      },
    }).then(() => {
      dispatch(actAddProduct(name, price, status));
    });
  };
};

export const actAddProduct = (name, price, status) => {
  return {
    type: Types.ADD_PRODUCT,
    name,
    price,
    status,
  };
};

// update

export const actUpdateProductRequest = (id, name, price, status) => {
  return (dispatch) => {
    axios({
      method: "put",
      url: `http://localhost:3000/products/${id}`,
      data: {
        id,
        name,
        price,
        status,
      },
    }).then(() => {
      dispatch(actUpdateProduct(id, name, price, status));
    });
  };
};

export const actUpdateProduct = (id, name, price, status) => {
  return {
    type: Types.UPDATE_PRODUCT,
    id,
    name,
    price,
    status,
  };
};
