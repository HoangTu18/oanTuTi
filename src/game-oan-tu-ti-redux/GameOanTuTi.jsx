import React, { Component } from 'react'
import './GameOanTuTi.css'
import OanTuTi from './OanTuTi'
import ThongTinGame from './ThongTinGame'

export default class GameOanTuTi extends Component {
    render() {
        return (
            <div className="game-container py-4">
                <div className="container">
                    <div className="row">
                        <div className="col imgPlayer">
                            <div className="both">
                                <img src="./image/player.png" className="player img-thumbnail" alt="" />
                                <div id="squareOut">
                                    <div className="speech-bubble"></div>
                                    <div id="square">
                                        <img src="./image/bao.png" className="tuXi w-50 h-50" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex game">
                                <div className="m-2">
                                    <button className="box">
                                        <img src="./image/keo.png" className="card-img-top" alt="" />
                                    </button>

                                </div>
                                <div className="m-2">
                                    <button className="box">
                                        <img src="./image/bua.png" className="card-img-top" alt="" />
                                    </button>

                                </div>
                                <div className="m-2">
                                    <button className="box">
                                        <img src="./image/bao.png" className="card-img-top" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 my-4">
                            <div>
                                <div className="title">
                                    <h1 className="text-center total">I'm iron man, I love <br /> you 3000!!</h1>
                                </div>

                                <div className="winningTurn py-4">
                                    <h1 className="text-center  text-success">Số bàn thắng: <span className="total"></span></h1>
                                </div>

                                <div className="turn">
                                    <h1 className="text-center text-success">Số bàn chơi: <span className="total"></span></h1>
                                </div>

                                <div className="btn">
                                    <button className="btn btn-success mt-4 px-4 py-2">Play game</button>
                                </div>
                            </div>
                        </div>
                        <div className="col imgPlayer">
                            <div className="both">
                                <div>
                                    <img src="./image/playerComputer.png" className="player img-thumbnail" alt="" />
                                </div>
                                <div id="squareOut">
                                    <div className="speech-bubble"></div>
                                    <div id="square">
                                        <img src="./image/bao.png" className="tuXi w-50 h-50" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        )
    }
}
