import React, { Component } from "react";
import "./GameOanTuTi.css";
import { connect } from "react-redux";
import Player from "./Player";
import Computer from "./Computer";
import KetQuaGame from "./KetQuaGame";

export default class GameOanTuTi extends Component {
  render() {
    const { mangDatCuoc } = this.props;

    return (
      <div className="gameOanTuTi">
        <div className="row">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQuaGame />
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}
