import { Link } from "react-router-dom";
import React, { Component } from "react";
import products from "../../reducers/products";
class ProductItem extends Component {
  onDeleteProduct = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa ?")) {
      // eslint-disable-next-line no-restricted-globals
      this.props.onDelete(id);
    }
  };
  render() {
    var { product, index } = this.props;

    var productStatus = product.status ? "Còn hàng" : "hết hàng";
    var productClass = product.status ? "warning" : "default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${productClass}`}>{productStatus}</span>
        </td>
        <td>
          <Link
            to={`/product/${product.id}/edit`}
            className="btn btn-success mr-10"
          >
            Sửa
          </Link>
          <button
            type="button"
            className="btn btn-waring"
            onClick={() => this.onDeleteProduct(product.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}
export default ProductItem;
