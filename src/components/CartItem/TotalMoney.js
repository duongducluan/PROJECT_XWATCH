import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sumMoney} from './../../actions/index';
class TotalMoney extends Component {
    componentDidMount(){ 
        this.props.sumMoneyAll()
    }
    render() {
        var {monyall}=this.props
        return (
        <div className="total-money">{monyall}(VNĐ)</div>
            )
         }
}
const mapStateToProps=(state)=>{
    return{
        monyall:state.monyall
    }
}
const mapDispatchToProps=dispatch=>{
    return {
         sumMoneyAll:()=>{
            dispatch(sumMoney())
          }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TotalMoney);
