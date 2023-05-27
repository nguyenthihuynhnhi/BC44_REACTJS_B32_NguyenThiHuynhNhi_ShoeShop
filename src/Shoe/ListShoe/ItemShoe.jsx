import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    const { shoe, handleChangeDetail } = this.props;
    return (
      <div className="col-4 ">
        <div
          className="card p-3 h-100 justify-content-between gap-2"
          style={{ width: "16rem" }}
        >
          <div className="">
            <img src={shoe.image} className="card-img-top" alt={shoe.name} />
            <h5 className="card-title">{shoe.name}</h5>
            <p className="card-text">{shoe.description}</p>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button
              onClick={() => {
                handleChangeDetail(shoe);
              }}
              className="btn btn-primary"
            >
              Xem chi tiết
            </button>
            <button className="btn btn-secondary">Mua</button>
          </div>
        </div>
      </div>
    );
  }
}