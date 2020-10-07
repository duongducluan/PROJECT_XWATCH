import React, { Component } from 'react'
import p8 from './../../img/p8.PNG';
import p9 from './../../img/p9.PNG';
import p10 from './../../img/p10.PNG';
import p11 from './../../img/p11.PNG';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductInCart } from './../../actions/index';
class MainContend extends Component {
    addItem = () => {
        var { product } = this.props;
        if (product.id) {
            this.props.addItemTasks(product)
        }
    }
    render() {
        var { product } = this.props;
        var { price } = product;
        var { name } = product;
        return (
            <div className="col-sm-4 main-conten">
                <h1>{name}</h1>&gt;
                <div><img src={p8} alt="" /><span className="comment">(1 đánh giá)</span></div>
                <h1 style={{ color: '#999999' }}>6.275.000₫</h1>
                <h1 style={{ color: 'red', fontWeight: 400 }}>{price}₫</h1>
                <div>
                    <span style={{ fontWeight: 'bold' }}>
                        <img alt="" src={p9} style={{ marginTop: '-8px' }} />
                Trạng thái: Còn hàng
              </span>
                </div>
                <div className="promotion">
                    <h1>KHUYẾN MÃI</h1>
                    <div>
                        <img src={p10} alt="" />
                        <span>Trả góp 0%: Mua đồng hồ chỉ với 333.000đ.</span><br />
                        <a href="#">Xem chi tiết</a>
                    </div>
                    <div>
                        <img src={p10} alt="" />
                        <span>Tặng gói Bảo hiểm Silver trị giá 2.000.000đ. </span><br />
                        <a href="#">Xem chi tiết</a>
                    </div>
                </div>
                <div className="bt">
                    <Link to='/cartitem'
                        onClick={this.addItem}
                    >
                        <span className="bt-buy">
                            MUA NGAY
                     </span>
                    </Link>
                    <span className="bt-buy-now">
                        MUA TRẢ GÓP 0%
              </span>
                </div>
                <form  method="POST" role="form">
                    <div className="form-group">
                        <label>
                            <img src={p11} alt="" />
                            <span>TƯ VẤN MIỄN PHÍ</span>
                        </label>
                        <div className="mac-flex">
                            <input type="text" className="form-control" placeholder="Để lại số điện thoại..." />
                            <button type="submit" className="btn btn-primary">Gửi</button>
                        </div>
                    </div>
                </form>
                <div>
                    <h1>Khách hàng Phạm Đăng Việt<span style={{ fontWeight: 200, fontSize: 17 }}>(03733393**)</span>
                    </h1>
                    <span><i className="fa fa-angle-right" style={{ fontSize: 15, color: 'white', backgroundColor: 'red', borderRadius: '50%', padding: '3px 5px', marginRight: 3 }} />Đã
                mua một day trước</span>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.product
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addItemTasks: (product) => {
            dispatch(addProductInCart(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContend);
