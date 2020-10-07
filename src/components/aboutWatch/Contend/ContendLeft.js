import React, { Component } from 'react';
import mac1 from "./../../../img/mac1.PNG";
class ContendLeft extends Component {
    render() {
        return (
            <div className="col-xl-6">
            <div className="header-l">
              <img src={mac1} alt="" />
            </div>
            <h2 className="title">
              <a
                href="https://xwatch.vn/ve-xwatch/tong-hop-chung-nhan-dong-ho-chinh-hang-tai-xwatch-minh-chung-cho-su-uy-tin-n956402.html"
                title="Tổng hợp chứng nhận đồng hồ chính hãng tại Xwatch - Minh chứng cho sự uy tín"
              >
                TRIẾT LÍ KINH DOANH: CHỮ TÂM HÀNG ĐẦU!
              </a>
            </h2>
            <div className="datetime">20/05/2019</div>
            <div className="summary">
              Xwatch được biết đến là đơn vị phân phối đồng hồ chính hãng uy
              tín tại Việt Nam. Sở hữu...
            </div>
          </div>
         
        );
    }
}

export default ContendLeft;