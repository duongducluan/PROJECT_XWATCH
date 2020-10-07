import React, { Component } from 'react'
import a1 from "./../../img/a1.PNG";
class ConfirmOclock extends Component {
    render() {
        return (
            <div className="row confirm-oclock">
                <div className="col-xl-4 one-confirm">
                    <a href="#">
                        <div>
                            <img src={a1} />
                        </div>
                        <h1>CHUYÊN GIA THẨM ĐỊNH</h1>
                        <div>ĐỒNG HỒ THẬT GIẢ</div>
                    </a>
                </div>
                <div className="col-xl-4 one-confirm">
                    <a href="#">
                        <div>
                            <img src={a1} />
                        </div>
                        <h1>CHUYÊN GIA THẨM ĐỊNH</h1>
                        <div>ĐỒNG HỒ THẬT GIẢ</div>
                    </a>
                </div>
                <div className="col-xl-4 one-confirm">
                    <a href="#">
                        <div>
                            <img src={a1} />
                        </div>
                        <h1>CHUYÊN GIA THẨM ĐỊNH</h1>
                        <div>ĐỒNG HỒ THẬT GIẢ</div>
                    </a>
                </div>
            </div>
        )
    }
}
export default ConfirmOclock;
