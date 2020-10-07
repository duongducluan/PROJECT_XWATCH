import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortMaxMin,sortMinMax } from '../../actions/index';
class SortList extends Component {
    sortMaxMax = () => {
        var {products}=this.props
        this.props.sortMax(products,20);
    }
    sortMinMin = () => {
        var {products}=this.props
        this.props.sortMin(products,20);
    }
    render() {
        return (
            <div className="sort-list">
                <div class="dropdown">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    Sắp xếp theo
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item"  onClick={this.sortMaxMax}>Giá từ cao đến thấp</a>
                        <a class="dropdown-item"  onClick={this.sortMinMin}>Giá từ thấp đến cao</a>
                        <a class="dropdown-item " >Bán chạy nhất</a>
                        <a class="dropdown-item " >Khuyến mãi</a>
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
        sortMax: (products,value) => {
            dispatch(sortMaxMin(products,value))
        },
        sortMin: (products,value) => {
            dispatch(sortMinMax(products,value))
        }
    }
}
const mapStateTopProps= (state)=>{
    return{
        products:state.products
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(SortList);
