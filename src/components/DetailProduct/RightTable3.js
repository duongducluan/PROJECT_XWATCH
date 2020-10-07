import React, { Component } from 'react'
import c1 from './../../img/c1.PNG';
import c2 from './../../img/c2.PNG';
import c3 from './../../img/c3.PNG';
import c4 from './../../img/c4.PNG';
import p12 from './../../img/p12.PNG';
class RightTable extends Component {
    render() {
        return (
            <div className="col-sm-4 main-right">
                <div className="title mac-flex">
                    <div>
                        <img src={p12} />
                    </div>
                    <div style={{ marginLeft: 10 }}>
                        SỐ 1 BẢO HÀNH, HẬU MÃI<br />
                        <h1>TẠI VIỆT NAM</h1>
                    </div>
                </div>
                <div className="wp-contend">
                    <div className="conten">
                        <div className="mac-flex" style={{ padding: 10 }}>
                            <div><img src={c1} /></div>
                            <div style={{ marginLeft: 10 }}>Bảo hiểm cả lỗi người dùng trong 5 năm</div>
                        </div>
                    </div>
                    <div className="conten">
                        <div className="mac-flex" style={{ padding: 10 }}>
                            <div><img src={c2}/></div>
                            <div style={{ marginLeft: 10 }}>Bảo hiểm cả lỗi người dùng trong 5 năm</div>
                        </div>
                    </div>
                    <div className="conten">
                        <div className="mac-flex" style={{ padding: 10 }}>
                            <div><img src={c3} /></div>
                            <div style={{ marginLeft: 10 }}>Bảo hiểm cả lỗi người dùng trong 5 năm</div>
                        </div>
                    </div>
                    <div className="conten">
                        <div className="mac-flex" style={{ padding: 10 }}>
                            <div><img src={c4} /></div>
                            <div style={{ marginLeft: 10 }}>Bảo hiểm cả lỗi người dùng trong 5 năm</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default RightTable;
