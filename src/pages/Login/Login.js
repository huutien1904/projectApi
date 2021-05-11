import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form action="" method="POST">
          <legend>Đăng nhập</legend>

          <div className="form-group">
            <label>user</label>
            <input type="text" className="form-control" />
          </div>

          <div className="form-group">
            <label>password</label>
            <input type="password" className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary">
            Đăng nhập
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
