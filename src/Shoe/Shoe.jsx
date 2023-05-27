import React, { Component } from "react";
import ListShoe from "./ListShoe/ListShoe";
import DetailShoe from "./DetailShoe/DetailShoe";
import CartShoe from "./CartShoe/CartShoe";
import { shoeArr } from "./data";

export default class Shoe extends Component {
  state = {
    shoeArr: shoeArr,
    detail: shoeArr[0],
    cart: [],
  };

  handleChangeDetail = (shoe) => {
    this.setState({
      detail: shoe,
    });
  };

  handleAddToCart = (shoe) => {
    // clone cart
    const cloneCart = [...this.state.cart];

    // tìm kiếm xem shoe đó có trong mảng hay không
    const index = cloneCart.findIndex((item) => item.id === shoe.id);

    // clone obj => thêm key soLuong: nếu chưa có thì thêm vào, nếu có thì cập nhật
    const newShoe = { ...shoe, soLuong: 1 };

    if (index === -1) {
      // nếu shoe đó không có trong cart thì thêm (push) vào mảng cloneCart
      cloneCart.push(newShoe);
    } else {
      // nếu shoe đã tồn tại thì chỉ tăng số lượng
      cloneCart[index].soLuong = cloneCart[index].soLuong + 1;
    }

    // set state đồng nghĩa với render lại
    this.setState({ cart: cloneCart });
  };

  handleChangeAmount = (shoe, option) => {
    // clone cart
    const cloneCart = [...this.state.cart];

    // tìm kiếm xem shoe đó có trong mảng hay không
    const index = cloneCart.findIndex((item) => item.id === shoe.id);

    cloneCart[index].soLuong = cloneCart[index].soLuong + option;

    if (cloneCart[index].soLuong === 0) {
      cloneCart.splice(index, 1);
    }

    this.setState({
      cart: cloneCart,
    });
  };

  handleDelete = (shoe) => {
    // clone cart
    const cloneCart = [...this.state.cart];

    // tìm kiếm xem shoe đó có trong mảng hay không
    const index = cloneCart.findIndex((item) => item.id === shoe.id);
    cloneCart.splice(index, 1);
    this.setState({
      cart: cloneCart,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row py-5">
          <div className="col-8">
            <ListShoe
              handleAddToCart={this.handleAddToCart}
              handleChangeDetail={this.handleChangeDetail}
              list={this.state.shoeArr}
            />
          </div>
          <div
            className="col-4 d-flex flex-column gap-2 "
            style={{ height: "80vh" }}
          >
            <DetailShoe detail={this.state.detail} />
            <CartShoe
              handleDelete={this.handleDelete}
              handleChangeAmount={this.handleChangeAmount}
              cart={this.state.cart}
            />
          </div>
        </div>
      </div>
    );
  }
}
