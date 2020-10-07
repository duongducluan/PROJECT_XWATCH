import React,{Component} from 'react';
import {Link} from "react-router-dom";
class Items extends Component{
    render(){
        var { img } = this.props;
        var { id } = this.props;
        var { name } = this.props;
        var { introduce } = this.props;
        var { price } = this.props;
        return(
            <div className="col-xl-3 right-item-cat">
                <div className="product">
                    <div className="img">
                        <Link to={`/product/${id}/detail`}
                            onClick={this.getItemData}>
                            <img src={img} alt=""/>
                        </Link>
                    </div>
                    <div className="contend-item">
                        <h2>{name}</h2>
        <div style={{ fontSize: 14, marginLeft: '-10px' }}>{introduce}</div>
                        <h2 style={{ color: "red" }}>{price}</h2>
                    </div>
                </div>
            </div>  
        )
    }
}
export default Items;