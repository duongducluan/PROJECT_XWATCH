import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortMaxMin,sortMinMax } from './../../actions/index';
class SortList extends Component {
    sortMaxMax = () => {
        var {products}=this.props
        this.props.sortMax(products);
    }
    sortMinMin = () => {
        var {products}=this.props
        console.log(products.length)
        this.props.sortMin(products);
    }
    render() {
        return (
            <div className="sort-list">
                <div className="dropdown">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    Sắp xếp theo
                    </button>
                    <div className="dropdown-menu">
                        <a alt="" className="dropdown-item"  onClick={this.sortMaxMax}>Giá từ cao đến thấp</a>
                        <a alt="" className="dropdown-item"  onClick={this.sortMinMin}>Giá từ thấp đến cao</a>
                        <a alt="" className="dropdown-item " >Bán chạy nhất</a>
                        <a alt="" className="dropdown-item " >Khuyến mãi</a>
                    </div>
                </div>
            </div>
        )
    }
}
const map = () => {
    var a=this.props.products
    console.log(a)
}
const mapDispatchToProps = (dispatch,) => {
    return {
        sortMax: (products) => {
            dispatch(sortMaxMin(products))
        },
        sortMin: (products) => {
            dispatch(sortMinMax(products))
        }
    }
}
const mapStateTopProps= (state)=>{
    return{
        products:state.products
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(SortList);
