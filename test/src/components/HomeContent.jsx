import React, { Component } from 'react'

export default class HomeContent extends Component {
    render() {
        return (
            <div className="HomeContent">
                <div className="container">
                    <h3 className="homeContent_title">THỂ LỆ</h3>
                    <div className="homeContent_item">
                        <p>Mini Game <span className="home_item_red">“Gửi yêu thương đến phái đẹp”</span> là món quà chúng tôi gửi tặng một nửa ACB nhân ngày 8/3
yêu thương. Cùng chúng tôi trải qua ngày đặc biệt này với những món quà bất ngờ đang chờ bạn nhé.</p>
                    </div>

                    <div className="row">
                        <div className="khung col-lg">
                            <img src="./img/frame.png" alt="" />
                        </div>
                        <div className="suatam">
                            <img src="./img/sua-tam.png" alt="" />
                            <p className="text-center"><b>Sửa tắm</b></p>
                        </div>
                        <div className="right col-lg">
                            <p className="home_item_title">Bạn có muốn nhận thêm phần quà đặc biệt Set trang điểm của thương hiệu Chanel?</p>
                            <ul>
                                <li>Bước 1: Bạn hãy chụp ảnh màn hình và chia
                                sẻ tất cả món quà bạn nhận được (bao gồm cả lời
                chúc) trên FB cá nhân và hashtag <span className="home_item_red">#ACB #guiyeuthuongdenphaidep</span> và tag ít nhất 10 người bất kì trên FB.</li>
                                <li>Bước 2: Chụp màn hình FB của bạn đã thực
                                hiện và gửi về mail về pqtttth@acb.com.vn. Hạn
                chót gửi hình về là 23h59 ngày 09.03.2019</li>
                                <li>Bước 3: Ngày 11.03.2019, chúng tôi sẽ công Sữa tắm bố KQ set quà đặc biệt tại ACB Home</li>
                            </ul>
                            <button className="btn">Bắt đầu</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
