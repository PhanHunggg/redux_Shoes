import React, { Component } from "react";
import { connect } from "react-redux";

class Card extends Component {
  render() {
    const { element } = this.props;
    return (
      <div style={{ height: 537 }} className="card my-4">
        <img className="card-img-top" src={element.image} alt="#" />
        <div className="card-body">
          <h4 className="card-title">{element.name}</h4>
          <p className="card-text">{element.price} $</p>
          <button
            onClick={() => this.props.addShoes(element)}
            className="btn btn-primary"
          >
            Add to carts
          </button>
          <button
            onClick={() => this.props.getDesc(element)}
            className=" ml-3 btn btn-success"
          >
            Description
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShoes(shoes) {
      dispatch({
        type: "ADD_SHOES",
        payload: shoes,
      });
    },
    getDesc(shoes) {
      dispatch({
        type: "GET_DESC",
        payload: shoes,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Card);
