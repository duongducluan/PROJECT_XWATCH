import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { fetchItemProduct} from './../../../actions/index';
import {connect} from 'react-redux';
class ItemProduct extends Component {
    getItemData=()=>{
        this.props.getProduct(this.props.product)
    }
    render() {
        var { img } = this.props;
        var { id } = this.props;
        var { name } = this.props;
        var { introduce } = this.props;
        var { price } = this.props;
        return (
            <div className="col-xl-4">
                <div className="product">
                    <div className="img">
                        <Link to={`/donghonu/product/${id}/detail`}
                               onClick={this.getItemData}>
                            <img title='okokokokookokokokok' src={img} />
                            </Link>
                    </div>
                    <div className="contend-item">
                        <h2>{name}</h2>
                        <div style={{ fontSize: 14, marginLeft: '-10px' }}>{introduce}
                        </div>
                        <h2>{price}</h2>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getProduct:(product)=>{
            dispatch(fetchItemProduct(product))
        }
    }
}
export default connect(null,mapDispatchToProps)(ItemProduct);