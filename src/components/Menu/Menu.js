import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";

const menus = [
  {
    name: "Trang chủ",
    exact: true,
    to: "/",
  },
  {
    name: "Quản lý sản phẩm",
    exact: true,
    to: "/product-list",
  },
  {
    name: "Đăng nhập",
    exact: true,
    to: "/login",
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className={match ? "active" : ""}>
      <Link to={to}>{label}</Link>
    </li>
  );
};
class Menu extends Component {
  render() {
    return (
      <div className="navbar">
        <a className="navbar-brand" href="/#">
          CALL API
        </a>
        <ul className="nav navbar-nav">{this.showMenu(menus)}</ul>
      </div>
    );
  }

  showMenu = (menus) => {
    var result = null;

    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            label={menu.name}
            to={menu.to}
            key={index}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
