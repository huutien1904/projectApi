import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  actAddProductRequest,
  actUpdateProductRequest,
} from "./../../actions/index";
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      axios({
        method: "get",
        url: `http://localhost:3000/products/${id}`,
        data: {},
      }).then((res) => {
        this.setState({
          id: res.data.id,
          txtName: res.data.name,
          txtPrice: res.data.price,
          chkbStatus: res.data.status,
        });
      });
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    var { id, txtName, txtPrice, chkbStatus } = this.state;
    var { history } = this.props;

    if (id) {
      this.props.actUpdateProduct(id, txtName, txtPrice, chkbStatus);
      history.goBack();
    } else {
      this.props.actAddProduct(txtName, txtPrice, chkbStatus);
      history.goBack();

      // axios({
      //   method: "post",
      //   url: "http://localhost:3000/products",
      //   data: {
      //     name: txtName,
      //     price: txtPrice,
      //     status: chkbStatus,
      //   },
      // }).then((res) => {
      //   console.log(res.data);
      //   history.goBack();
      // });
    }
  };
  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={this.onSave}>
              <div className="form-group">
                <label>T??n s???n ph???m</label>
                <input
                  type="text"
                  className="form-control"
                  name="txtName"
                  value={txtName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Gi??</label>
                <input
                  type="text"
                  className="form-control"
                  name="txtPrice"
                  value={txtPrice}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Tr???ng Th??i</label>
              </div>

              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="chkbStatus"
                    value={chkbStatus}
                    onChange={this.onChange}
                    checked={chkbStatus}
                  />
                  C??n h??ng
                </label>
              </div>

              <button type="submit" className="btn btn-primary">
                L??u l???i
              </button>

              <Link to="/product-list" class="btn btn-info ml-10">
                quay l???i{" "}
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    actAddProduct: (name, price, status) => {
      dispatch(actAddProductRequest(name, price, status));
    },
    actUpdateProduct: (id, name, price, status) => {
      dispatch(actUpdateProductRequest(id, name, price, status));
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductActionPage);
