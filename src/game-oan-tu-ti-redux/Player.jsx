import React, { Component } from "react";
import { connect } from "react-redux";

export class Player extends Component {
  render() {
    console.log("props", this.props.mangDatCuoc);
    return (
      <div className="imgPlayer">
        <div className="both">
          <img
            src="./image/player.png"
            className="player img-thumbnail"
            alt=""
          />
          <div id="squareOut">
            <div className="speech-bubble"></div>
            <div id="square">
              <img
                src={
                  this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                    .hinhAnh
                }
                className="tuXi w-50 h-50"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="d-flex game ">
          {this.props.mangDatCuoc.map((item, index) => {
            //click thi them vien`
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid red" };
            }

            return (
              <div className="m-2">
                <button
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                  style={border}
                  className="box"
                >
                  <img src={item.hinhAnh} className="card-img-top" alt="" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.oanTuTiRedux.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "DAT_CUOC",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
