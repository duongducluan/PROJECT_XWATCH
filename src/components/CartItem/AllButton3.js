import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {removeAllremoveAll} from './../../actions/index';
import {connect} from 'react-redux';
class AllButton extends Component {
    delete=()=>{
        this.props.deleteAll();
    }
    render() {

        return (
            
            <div className="wp-button mac-flex">
            <Link to='/donghonam'>
            <div><span>&lt;&lt;</span>Tiếp tục mua hàng</div>
            </Link>
                <div>Tính lại</div>
                <div onClick={this.delete}>Xóa hết</div>
                <div>Thanh toán lại</div>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        deleteAll:()=>{
            dispatch(removeAllremoveAll())
        }
    }
}
export default connect(null,mapDispatchToProps)(AllButton);
