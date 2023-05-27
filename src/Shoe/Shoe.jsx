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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <ListShoe
              handleChangeDetail={this.handleChangeDetail} list={this.state.shoeArr}
            />
          </div>
          <div className="col-4">
            <DetailShoe  detail={this.state.detail} />
            <CartShoe />
          </div>
        </div>
      </div>
    );
  }
}
