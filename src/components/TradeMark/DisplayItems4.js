import React, { Component } from 'react';
import {connect} from "react-redux";
class DisplayItems extends Component {
  chooseTradeMark=(value)=>{
    this.props.addImages(value);
  }
  render() {
    var {imgtrademark}=this.props;
    var rowimg = imgtrademark.map((item,index) => {
      return (
        <div className="row" key={index}>
          <div className="col-xl-3">
            <img src={item.img1} alt="" />
          </div>
          <div className="col-xl-9 right-style">
            <div className="list-style">
              <a>
              <img src={item.img2} alt="" />
              </a>
              <img src={item.img3} alt="" />
            </div>
          </div>
        </div>
      )
    })
    return (
          <div className="wp-trademark">
              {rowimg}
            </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    imgtrademark:state.imgtrademark
  }
}
export default connect(mapStateToProps,null)(DisplayItems);
