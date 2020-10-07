import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addProductInCart,getProductInCart} from './../../actions/index';
import ItemCart from './ItemCart2';
class TableCart extends Component {
    render() {
        var {tasks}=this.props;
        if(tasks){
        var task=tasks.map((task,index)=>{
            return <ItemCart
                     key={index}
                     sumPrice={task.sumPrice}
                     amount={task.amount}
                     id={task.id}
                     stt={index}
                     name={task.name}
                     img={task.img}
                     price={task.price}
                   />
        })
    }
        return (
            <div className="wrap-cart">
            <div className="title">
                <h1>Mua Thanh Toán Nhanh</h1>
            </div>
            {/* //=======Table=====/// */}
            <div className="wp-table">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>TÊN</th>
                            <th>SỐ LƯỢNG</th>
                            <th>ĐƠN GIÁ(VNĐ)</th>
                            <th>TỔNG</th>
                            <th>XÓA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {task}
                    </tbody>
                </table>
              
            </div>
        </div>

            )
    }
}
const mapStateToProps=(state)=>{
    return{
        tasks:state.tasks,
        product:state.product
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        addItemTasks:(product)=>{
           dispatch(addProductInCart(product))
         },
         getTasks:()=>{
            dispatch(getProductInCart())
          }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TableCart);
