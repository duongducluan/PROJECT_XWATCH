import React, { Component } from 'react';
import p6 from './../../img/p6.PNG';
import p7 from './../../img/p7.PNG';
import { getItemProduct} from '../../actions/index';
import {connect} from 'react-redux';
class LeftShow extends Component {
     componentDidMount(){
    var {id}=this.props.match.params
        this.props.getItem(id,'taskoclockDb') ;
}
    render() {
        var {product}=this.props;
        return (
            <div className="col-sm-4">
                <div className="wp-img">
                    <img alt="" src={product.img}  />
                </div>
                <div className="status">
                    <button className="like"><span>
                        <img alt="" src={p6} alt />
                    </span><span className="span-l">Thích 0</span></button>
                    <button className="share">
                        <span>
                            <img alt="" src={p7} />
                        </span><span className="span-s">Chia sẻ 0</span></button>
                </div>
                <script src="./../../pages/style.js"></script>
            </div>

        )
    }
}

const mapStateToProps=(state)=>{
    return{
        product:state.product
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getItem:(id,taskoclockDb)=>{
            dispatch(getItemProduct(id,taskoclockDb))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeftShow);
