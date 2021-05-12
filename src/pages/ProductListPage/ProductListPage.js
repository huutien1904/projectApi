import React, { Component } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import callApi from "./../../utils/apiCaller";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    callApi("products", "GET", null).then((reponse) => {
      this.setState({
        products: reponse.data,
      });
    });
  }
  render() {
    var { products } = this.state;

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-info mb-10">
          Thêm sản phầm
        </button>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }

  showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} />;
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
export default connect(mapStateToProps, null)(ProductListPage);
