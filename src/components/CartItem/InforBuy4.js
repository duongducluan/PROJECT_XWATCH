import React, { Component } from 'react';
class DetailProduct extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-md-5">
                <div className="information-buy">
                    <div><h1>Thông tin đặt hàng</h1></div>
                    <div className="wp-form">
                        <form action="/action_page.php">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Họ tên(*)" id="email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Điện thoại" id="pwd" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Địa chỉ(*)" id="pwd" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Email" id="pwd" />
                            </div>
                            <div className="form-group">
                                <textarea type="password" className="form-control" placeholder="Chú thích đơn hàng" id="pwd" defaultValue={"                                                                    "} />
                            </div>
                            {/* 	<button type="submit" class="btn btn-primary">Submit</button> */}
                        </form>
                        <div style={{ fontSize: 14 }}>Những có dấu (*) là bắt buộc phải nhập</div>
                    </div>
                    <div className="pay">
                        <h1>Thanh toán khi nhận hàng</h1>
Thanh toán C.O.D
</div>
                </div>
            </div>
        </div>

        )
    }
}
export default DetailProduct;
