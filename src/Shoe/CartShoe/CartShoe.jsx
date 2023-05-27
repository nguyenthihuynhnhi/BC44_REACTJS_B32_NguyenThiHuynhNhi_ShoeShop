import React, { Component } from "react";
import ItemCartShoe from './ItemCartShoe';

export default class CartShoe extends Component {
  render() {
    const { cart, handleChangeAmount, handleDelete } = this.props;
    return (
      <div
        className="border rounded-4 p-3 flex-grow-1"
        style={{ height: "40%" }}
      >
        <h2>Giỏ hàng</h2>
        <div className="overflow-auto" style={{ height: "85%" }}>
          {cart.map((shoe) => {
            return <ItemCartShoe handleDelete={handleDelete} handleChangeAmount={handleChangeAmount} shoe={shoe} key={shoe.id}/>
          })}
        </div>
      </div>
    );
  }
}
