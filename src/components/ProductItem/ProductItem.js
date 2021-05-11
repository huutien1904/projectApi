import React, { Component } from "react";
class ProductItem extends Component {
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
          <button type="button" className="btn btn-success mr-10">
            Sửa
          </button>
          <button type="button" className="btn btn-waring">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}
export default ProductItem;
