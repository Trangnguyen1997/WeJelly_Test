import React, { Component } from 'react'
import HomeContent from './HomeContent';

export default class Home extends Component {
    render() {
        return (
        <div className="home">
                <div className="home_image">
                    <img src="./img/box-thong-tin.png" alt="" />
                    <HomeContent/>
                </div>
            </div>
        )
    }
}
