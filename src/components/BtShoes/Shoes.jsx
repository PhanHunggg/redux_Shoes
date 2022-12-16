import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";

class Shoes extends Component {
  renderShoes = () => {
    return this.props.data.map((element) => {
      return (
        <div key={element.id} className="col-4">
          <Card element = {element} />
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderShoes()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.shoesReducer.data,
  };
};

export default connect(mapStateToProps)(Shoes);
