import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  render() {
    const { list, handleChangeDetail } = this.props;

    return (
      <div className="d-flex flex-column py-5" style={{height:"100vh"}} >
        <h2 className="mb-5">Danh sách sản phẩm</h2>
        <div className="row row-gap-3 overflow-y-scroll">
            { list.map((shoe) => { 
                return <ItemShoe handleChangeDetail={handleChangeDetail} shoe={shoe} />
             })}
        </div>
      
      </div>
    );
  }
}
