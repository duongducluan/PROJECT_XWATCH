
import React, { Component } from 'react';
import anh1 from './../../img/anh1.PNG';
import icon4 from './../../img/icon4.PNG';
import icon5 from './../../img/icon5.PNG';
import anh2 from './../../img/anh2.PNG';
import anh3 from './../../img/anh3.PNG';
import anh4 from './../../img/anh4.PNG';
class KnowLegde extends Component {
    render() {
        return (
            <div className="knowlegde-oclock">
                <div className="evaluate">
                    <div>
                        <img src={icon4} />
                    </div>
                    <h2 style={{ fontSize: '35px !important', fontWeight: 350 }}>KIẾN THỨC ĐỒNG HỒ</h2>
                </div>
                <div className="row information-cat">
                    <div className="col-xl-3">
                        <img src={anh1} />
                        <div className="conten">
                            <h1>
                                <a href="#">THHẦY PHAN TẤN CHI:NGƯỜI VIỆT NAM ĐẦU TIÊN...</a></h1>
                            <div>
                                <img src={icon5} />29/06/2020</div>
                            <div>
                                Thầy Phan Chấn Chi là người Việt Nam ĐẦU TIÊN được Omega chứng nhận,được phép dạy và sửa
                                chửa...
            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <img src={anh2} />
                        <div className="conten">
                            <h1>
                                <a href="#">THẦY PHAN TẤN CHI:NGƯỜI VIỆT NAM ĐẦU TIÊN...</a></h1>
                            <div><img src={icon5}/>29/06/2020</div>
                            <div>
                                Thầy Phan Chấn Chi là người Việt Nam ĐẦU TIÊN được Omega chứng nhận,được phép dạy và sửa
                                chửa...
            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <img src={anh3} />
                        <div className="conten">
                            <h1>
                                <a href="#">THẦY PHAN TẤN CHI:NGƯỜI VIỆT NAM ĐẦU TIÊN...</a></h1>
                            <div><img src={icon5} />29/06/2020</div>
                            <div>
                                Thầy Phan Chấn Chi là người Việt Nam ĐẦU TIÊN được Omega chứng nhận,được phép dạy và sửa
                                chửa...
            </div>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <img src={anh4} />
                        <div className="conten">
                            <h1>THẦY PHAN TẤN CHI:NGƯỜI VIỆT NAM ĐẦU TIÊN...</h1>
                            <div><img src={icon5} />29/06/2020</div>
                            <div>
                                Thầy Phan Chấn Chi là người Việt Nam ĐẦU TIÊN được Omega chứng nhận,được phép dạy và sửa
                                chửa...
            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default KnowLegde;
