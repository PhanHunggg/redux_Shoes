import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
  renderShoes = () => {
    return this.props.carts.map((element) => {
      return (
        <tbody key={element.id}>
          <tr>
            <td>{element.id}</td>
            <td>
              <img
                width={50}
                src={element.image}
                className="img-fluid"
                alt="phone"
              />
            </td>
            <td>{element.name}</td>
            <td className="d-flex justify-content-center align-items-center">
              <button
                onClick={() => this.props.handleQuantity(element, false)}
                className="btn btn-warning"
              >
                -
              </button>
              <span className="mx-1">{element.soLuong}</span>
              <button
                onClick={() => this.props.handleQuantity(element, true)}
                className="btn btn-warning"
              >
                +
              </button>
            </td>
            <td>
              {element.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td>
              {(element.price * element.soLuong).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
            <td>
              <button onClick={() => this.props.deleteShoes(element)} className="btn btn-danger">XÓA</button>
            </td>
          </tr>
        </tbody>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="d-flex justify-content-end mb-2">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#gioHang"
          >
            GIỎ HÀNG ({this.props.carts.length})
          </button>
        </div>
        <div
          className="modal fade"
          id="gioHang"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình Ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn Giá</th>
                      <th>Thành Tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  {this.renderShoes()}
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleQuantity(shoes, isIncrease) {
      dispatch({
        type: "HANDLE_QUANTITY",
        payload: {
          shoes,
          isIncrease,
        },
      });
    },
    deleteShoes(shoes) {
      dispatch({
        type: "DELETE_SHOES",
        payload: shoes,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    carts: state.shoesReducer.carts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHang);
