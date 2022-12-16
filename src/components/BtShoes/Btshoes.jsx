import React, { Component } from "react";
import GioHang from "./GioHang";
import Shoes from "./Shoes";

export default class Btshoes extends Component {
  render() {
    return (
      <div className="py-5">
        <h1 className="text-center">Shop Sneakers</h1>
        <div className="container">
          <GioHang />
          <Shoes />
        </div>
      </div>
    );
  }
}
