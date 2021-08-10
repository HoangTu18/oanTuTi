import React, { Component } from 'react'

export default class ThongTinGame extends Component {
    render() {
        return (
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
        )
    }
}
