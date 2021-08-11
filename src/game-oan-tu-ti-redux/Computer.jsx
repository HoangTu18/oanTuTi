import React, { Component } from "react";
import { connect } from "react-redux";
export class Computer extends Component {
  render() {
    return (
      <div>
        <div className=" imgPlayer">
          <div className="both">
            <div>
              <img
                src="./image/playerComputer.png"
                className="player img-thumbnail"
                alt=""
              />
            </div>
            <div id="squareOut">
              <div className="speech-bubble"></div>
              <div id="square">
                <img
                  src={this.props.computer.hinhAnh}
                  className="tuXi w-50 h-50"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.oanTuTiRedux.computer,
  };
};

export default connect(mapStateToProps)(Computer);
