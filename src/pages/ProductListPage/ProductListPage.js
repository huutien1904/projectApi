import React, { Component } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  actFetchProductsRequest,
  actDeleteRequest,
} from "./../../actions/index";
class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }
  onDelete = (id) => {
    this.props.deleteProduct(id);
  };

  render() {
    var { products } = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add">
          <button type="button" className="btn btn-info mb-10">
            Thêm sản phẩm
          </button>
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }

  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    deleteProduct: (id) => {
      dispatch(actDeleteRequest(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
