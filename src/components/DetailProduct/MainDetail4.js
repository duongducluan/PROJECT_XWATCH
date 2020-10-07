import React, { Component } from 'react'
import l1 from './../../img/l1.PNG';
import l2 from './../../img/l2.PNG';
import o1 from './../../img/o1.PNG';
import o2 from './../../img/o2.PNG';
import o3 from './../../img/o3.PNG';
import o4 from './../../img/o4.PNG';
import p11 from './../../img/p11.PNG';
import {connect} from 'react-redux';
class MainDetail extends Component {
    render() {
      var {product}=this.props;
        var {price}=product;
        var {name}=product;
        var {img}=product;
        return (
            <div className="row main-detail">
            <div className="col-sm-8 left">
              <div className="menu mac-flex">
                <div>MÔ TẢ CHI TIẾT</div>
                <div>MÔ TẢ CHI TIẾT</div>
                <div>MÔ TẢ CHI TIẾT</div>
              </div>
              <div className="slide" />
              <div className="row">
                <div className="col-sm-6 left-1">
                  <div><img alt="" src={img} /></div>
                  <div className="conten">
                    <h1>{name}</h1>
                    <h1>6.725.000đ</h1>
                    <h1>{price}đ</h1>
                  </div>
                </div>
                <div className="col-sm-6 left-2">
                  <div className="bt-buy">
                    <img alt="" src={l2} alt /> MUA NGAY
            </div>
                  <form action method="POST" role="form">
                    <div className="form-group">
                      <label>
                        <img alt="" src={p11} />
                        <span>TƯ VẤN MIỄN PHÍ</span>
                      </label>
                      <div className="mac-flex">
                        <input type="text" className="form-control"  placeholder="Để lại số điện thoại..." />
                        <button type="submit" className="btn btn-primary">Gửi</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="paper-accept">
                <h1>GIẤY CHỨNG NHẬN ĐỒNG HỒ OP OLYM PIANUS - OLYMPIA STAR CHÍNH HÃNG</h1>
                <div className="list-prize mac-flex">
                  <div className="item">
                    <img alt="" src={o1} />
                  </div>
                  <div className="item">
                    <img alt="" src={o2} />
                  </div>
                  <div className="item">
                    <img alt="" src={o3} />
                  </div>
                  <div className="item">
                    <img alt="" src={o4} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="bottom-detail-r">
                <div className="top-info-detail">
                  <div className="view-more-detail-char">Xem thêm thông tin</div> --&gt;
          </div>
                <div className="popup-characteristic ">
                  <div className="table-condensed compare_table">
                    <table className="table  " border={0} cellPadding={0} width="100%">
                      <tbody><tr className="title-table-dt">
                        <td colSpan={2}>Thông tin sản phẩm</td>
                        <td />
                      </tr>
                        <tr className="tr-0" valign="top">
                          <td className="title_charactestic" width="40%">
                            Nhãn hiệu:
                    </td>
                          <td className="content_charactestic">
                            Olym Pianus </td>
                        </tr>
                        <tr className="tr-1" valign="top">
                          <td className="title_charactestic" width="40%">
                            Nguồn gốc:
                    </td>
                          <td className="content_charactestic">
                            Nhật Bản </td>
                        </tr>
                        <tr className="tr-0" valign="top">
                          <td className="title_charactestic" width="40%">
                            Kiểu máy:
                    </td>
                          <td className="content_charactestic">
                            Automatic </td>
                        </tr>
                        <tr className="tr-1" valign="top">
                          <td className="title_charactestic" width="40%">
                            Kích cỡ:
                    </td>
                          <td className="content_charactestic">
                            38mm </td>
                        </tr>
                        <tr className="tr-0" valign="top">
                          <td className="title_charactestic" width="40%">
                            Độ dày:
                    </td>
                          <td className="content_charactestic">
                            11mm </td>
                        </tr>
                        <tr className="tr-1" valign="top">
                          <td className="title_charactestic" width="40%">
                            Chất liệu vỏ:
                    </td>
                          <td className="content_charactestic">
                            Thép không gỉ 316L </td>
                        </tr>
                        <tr className="tr-0" valign="top">
                          <td className="title_charactestic" width="40%">
                            Chất liệu dây:
                    </td>
                          <td className="content_charactestic">
                            Thép không gỉ 316L </td>
                        </tr>
                        <tr className="tr-1" valign="top">
                          <td className="title_charactestic" width="40%">
                            Chất liệu kính:
                    </td>
                          <td className="content_charactestic">
                            Kính Sapphire </td>
                        </tr>
                        <tr className="tr-0" valign="top">
                          <td className="title_charactestic" width="40%">
                            Độ chịu nước:
                    </td>
                          <td className="content_charactestic">
                            30M </td>
                        </tr>
                        <tr className="tr-1" valign="top">
                          <td className="title_charactestic" width="40%">
                            Chức năng khác:
                    </td>
                          <td className="content_charactestic">
                            Hiển thị 24h, Open heart, dạ quang </td>
                        </tr>
                        <tr className="tr-0" valign="top">
                          <td className="title_charactestic" width="40%">
                            Bảo hiểm:
                    </td>
                          <td className="content_charactestic">
                            5 năm cả lỗi người dùng tại Xwatch </td>
                        </tr>
                        <tr className="tr-1" valign="top">
                          <td className="title_charactestic" width="40%">
                            Bảo hành quốc tế:
                    </td>
                          <td className="content_charactestic">
                            2 năm </td>
                        </tr>
                        <tr className="tr-0" valign="top">
                          <td className="title_charactestic" width="40%">
                            Giới tính:
                    </td>
                          <td className="content_charactestic">
                            Nam </td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        )
    }
}
const mapStateToProps=(state)=>{
  return {
    product:state.product
  }
}
export default connect(mapStateToProps,null)(MainDetail);
