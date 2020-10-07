import React, { Component } from "react";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import Products from "./../components/Home/Products/Products";
import Slider from "./../components/Home/Products/Slider";
import video from "./../img/video.mp4";
import video1 from "./../img/video1.mp4";
import video2 from "./../img/video2.mp4";
import video3 from "./../img/video3.mp4";
import z1 from "./../img/z1.PNG";
import z2 from "./../img/z2.PNG";
import m1 from "./../img/m1.PNG";
import m2 from "./../img/m2.PNG";
import m3 from "./../img/m3.PNG";
import z13 from "./../img/z13.PNG";
import z14 from "./../img/z14.PNG";
import z15 from "./../img/z15.PNG";
import v1 from "./../img/v1.PNG";
import v2 from "./../img/v2.PNG";
import v3 from "./../img/v3.PNG";
import mot from "./../img/1.PNG";
import hai from "./../img/2.PNG";
import ba from "./../img/3.PNG";
import bon from "./../img/4.PNG";
import KnowList from "./../components/MensWatch/KnowList8";

class DetailProduct extends Component {
 
  render() {
    var { history } = this.props;
    return (
      <div>
        <Header />
        <section>
        <Slider/>
        <div className="container">
            <div class="row">
              <div className="col-xl-6">
                <div className="video-left1">
                  <img
                    alt=""
                    src="https://xwatch.vn/images/videos/resized/aa2_1562241809.jpg"
                  />
                  <video id="video" width="400" controls>
                    <source src={video} type="video/mp4" />
                  </video>
                  <div className="icon-youtube">
                    <img
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg/1024px-YouTube_play_buttom_icon_%282013-2017%29.svg.png"
                    />
                  </div>
                  <div className="title-video">
                    <span>XWATCH VIDEO:</span>
                    <h1>VTV1:TIÊU HỦY ĐỒNG HỒ GIẢ CÙNG XWATCH</h1>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="img-right">
                  <img alt="" src={z1} />
                  <img alt="" src={z2} />
                </div>
              </div>
            </div>
            <div className="man-women">
              <h1>SẢN PHẨM NỔI BẬT</h1>
              <span>ĐỒNG HỒ NAM</span>
              <span>ĐỒNG HỒ NỬ</span>
            </div>
            <Products history={history} />
            <div className="all-oclock">
              <ins>XEM TẤT CẢ ĐỒNG HỒ NAM</ins>
            </div>
          </div>
          <div className="row block">
            <div className="col-xl-4">
              <img alt="" src={m1} />
              <div>1 ĐỔI 1 TRONG VÒNG 30 NGÀY NẾU LỖI CỦA NHÀ SẢN XUẤT</div>
            </div>
            <div className="col-xl-4">
              <img alt="" src={m2} />
              <div>MIỄN PHÍ VẬN CHUYỂN </div>
            </div>
            <div className="col-xl-4">
              <img alt="" src={m3} />
              <div>TẶNG GÓI BẢO HÀNH NGƯỜI DÙNG TRONG 5 NĂM</div>
            </div>
          </div>
          <div class="container">
            <div className="block_collection">
              <div className="row">
                <div className="col-xl-8 img-left">
                  <img alt="" src={z13} />
                  <div>
                    <h1>ĐỒNG HỒ DÀNH CHO NAM</h1>
                  </div>
                </div>
                <div className="col-xl-4 img-right">
                  <div className="oclock">
                    <img alt="" src={z14} />
                    <div>
                      <h1>ĐỒNG HỒ DÀNH CHO NỬ</h1>
                    </div>
                  </div>
                  <div className="oclock">
                    <img alt="" src={z15} />
                    <div>
                      <h1>ĐỒNG HỒ DÀNH CHO CẶP ĐÔI</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="customer">KHÁCH HÀNG NÓI VỀ CHÚNG TÔI</h1>
            <div className="row">
              <div className="col-xl-4">
                <div className="wp-video imgmot">
                  <img alt="" src={v1} />
                  <video id="video1" width="400" controls autoplay>
                    <source src={video1} type="video/mp4" />
                  </video>
                  <div className="icon">
                    <img
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg/1024px-YouTube_play_buttom_icon_%282013-2017%29.svg.png"
                    />
                  </div>
                  <div className="title">
                    <i>
                      Tôi thực sự an tâm và tin tưởng vào chất lượng dịch vụ của
                      XWatch. Lần đầu tiên thấy chiếc đồng hồ của mình được
                      chăm...
                    </i>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="wp-video imghai">
                  <img alt="" src={v2} />
                  <video id="video2" width="400" controls autoplay>
                    <source src={video2} type="video/mp4" />
                  </video>
                  <div className="icon">
                    <img
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg/1024px-YouTube_play_buttom_icon_%282013-2017%29.svg.png"
                    />
                  </div>
                  <div className="title">
                    <i>
                      Điều mà Linh ấn tượng nhất là chế độ bảo hành 5 năm theo
                      tiêu chuẩn Thuỵ Sĩ cho cả lỗi người dùng. Điều này không
                      phải...
                    </i>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="wp-video imgba">
                  <img alt="" src={v3} />
                  <video id="video3" width="400" controls autoplay>
                    <source src={video3} type="video/mp4" />
                  </video>
                  <div className="icon">
                    <img
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg/1024px-YouTube_play_buttom_icon_%282013-2017%29.svg.png"
                    />
                  </div>
                  <div className="title">
                    <i>
                      Tôi ủng hộ những người đặt lợi ích của khách hàng làm mục
                      tiêu phấn đấu. Vì vậy, tôi đã ủng hộ và lựa chọn XWATCH.
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="see-more">
              <span>
                <img
                  alt=""
                  src="https://baobigiaycarton.net/wp-content/uploads/2015/06/Mui-ten.png"
                />
              </span>
              <ins>XEM THÊM</ins>
            </div>
          </div>

          <div className="confirm">
            <div className="top-title">
              <h1>THẨM ĐỊNH ĐỒNG HỒ</h1>
            </div>
            <div class="container">
              <div className="row ">
                <div className="col-xl-3 wp-contend">
                  <div className="wp-img">
                    <img alt="" src={mot} />
                  </div>
                  <div className="title">
                    CẢNH BÁO LỪA ĐẢO!250 TỆU ĐỒNG VẪN MUA ĐỒNG HỒ ...
                  </div>
                </div>
                <div className="col-xl-3 wp-contend">
                  <div className="wp-img">
                    <img alt="" src={hai} />
                  </div>
                  <div className="title">
                    80%-90% ĐỒNG HỒ TẠI VIỆT NAM LÀ HÀNG GIẢ...
                  </div>
                </div>

                <div className="col-xl-3 wp-contend">
                  <div className="wp-img">
                    <img alt="" src={ba} />
                  </div>
                  <div className="title">
                    THẨM ĐỊNH ĐỒNG HỒ-HÀNH TRÌNH MẠNH MẼ TẨY CHAY...
                  </div>
                </div>
                <div className="col-xl-3 wp-contend">
                  <div className="wp-img">
                    <img alt="" src={bon} />
                  </div>
                  <div className="title">
                    CẢNH BÁO LỪA ĐẢO!250 TỆU ĐỒNG VẪN MUA ĐỒNG HỒ ...
                  </div>
                </div>
              </div>
            </div>
            <div className="registration">
              <a href="#" title="Thẩm định đồng hồ">
                CLICK ĐỂ ĐĂNG KÝ THẨM ĐỊNH ĐỒNG HỒ
              </a>
            </div>
          </div>
          <div className="container">
            <KnowList />
            <div className="news">
              <h1>BÁO CHÍ NÓI VỀ XWATCH</h1>
              <div>
                <span>
                  <a href="#">
                    <img
                      alt=""
                      src="https://xwatch.vn/images/partners/2019/05/15/resized/dantri_1557884275.jpg"
                    />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <img
                      alt=""
                      src="https://xwatch.vn/images/partners/2019/05/15/resized/vietnamnet-logo_1557884261.png"
                    />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <img
                      alt=""
                      src="https://xwatch.vn/images/partners/2019/05/15/resized/1200px-vtv1_logo_2013_finalsvg_1557884248.png"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default DetailProduct;
