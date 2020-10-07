import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProduct,count,Money,sumMoney} from './../../actions/index';
import $ from 'jquery';
class ItemCart extends Component {
    constructor(props){
        super(props);
        this.state={
           count:this.props.amount
        }
    }
    remove = (id) => {
            this.props.removeItem(id)
            this.props.sumMoneyAll()
    }
    onChange = (event) => {
        this.setState({
            count:event.target.value
        })
        $('.input').keypress( (event)=> {
            var {count}=this.state
            if (event.keyCode == 13 || event.which == 13) {
                this.props.counts(count,this.props.id)
                this.props.sumItemMoney(count,this.props.id)
                this.props.sumMoneyAll(this.props.tasks) 
            }   
        });    
    }
    render() {
        var { stt } = this.props
        var { name } = this.props
        var { img } = this.props
        var { price } = this.props
        var { id } = this.props
        var { sumPrice } = this.props
        return (
            <tr className='item'>
                <th>{stt}</th>
                <th>
                    <div>{name}</div>
                    <img src={img} />
                </th>
                <th>
                    <input name=""
                        className="input"
                        type="text"
                        value={this.state.count}
                        onChange={this.onChange}
                    />
                </th>
                <th>{price}(VNĐ)</th>
                <th>{sumPrice}(VNĐ)</th>
                <th>
                    <div onClick={() => this.remove(id)} style={{cursor: 'pointer'}}>X</div></th>
            </tr>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {
            dispatch(removeProduct(id))
        },
        counts: (value,id) => {
            dispatch(count(value,id))
        },
        sumItemMoney: (value,id) => {
            dispatch(Money(value,id))
        },
        sumMoneyAll:()=>{
            dispatch(sumMoney())
          }
}
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemCart);
