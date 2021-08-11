import React, { Component } from "react";
import { connect } from "react-redux";

export class KetQuaGame extends Component {
  render() {
    return (
      <div>
        <div className="title">
          <h1 className="text-center total">{this.props.ketQua}</h1>
        </div>
        <div className="winningTurn py-4">
          <h1 className="text-center  text-success">
            Số bàn thắng: <span className="total">{this.props.soBanThang}</span>
          </h1>
        </div>
        <div className="turn">
          <h1 className="text-center text-success">
            Số bàn chơi: <span className="total">{this.props.soBanChoi}</span>
          </h1>
        </div>
        <div className="btn">
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success mt-4 px-4 py-2"
          >
            Play game
          </button>
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.oanTuTiRedux.ketQua,
    soBanThang: state.oanTuTiRedux.soBanThang,
    soBanChoi: state.oanTuTiRedux.soBanChoi,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      dispatch({
        type: "RAN_DOM",
      });
      dispatch({
        type: "END_GAME",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaGame);
