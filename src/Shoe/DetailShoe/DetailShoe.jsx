import React, { Component } from "react";

export default class DetailShoe extends Component {
  render() {
    const { detail, handleChangeChiTiet } = this.props;

    return (
      <div className="border rounded-4 p-3">
        <h2>Thông tin chi tiết</h2>
        <div>
          <div>
            <span className="fw-bold">Tên: </span>
            <span>{detail.name}</span>
          </div>
          <div>
            <span className="fw-bold">Giá: </span>
            <span>{detail.price}</span>
          </div>
          <div>
            <span className="fw-bold">Mô tả: </span>
            <span>{detail.description}</span>
          </div>
          <div>
            <span className="fw-bold">Mô tả ngắn: </span>
            <span>{detail.shortDescription}</span>
          </div>
          <div>
            <span className="fw-bold">Số Lượng: </span>
            <span>{detail.quantity}</span>
          </div>
          <div>
            <p className="text-center fw-bold">Hình ảnh</p>
            <div style={{ width: "50%" }} className="mx-auto">
              <img
                style={{ width: "100%" }}
                src={detail.image}
                alt={detail.name}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
