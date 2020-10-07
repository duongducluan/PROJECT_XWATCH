import React, { Component } from 'react';
import ItemProduct from './ItemProduct';
import {connect} from 'react-redux';
import {getData} from './../../../actions/index';
import {NavLink} from "react-router-dom";
class MainRight extends Component {
    componentDidMount(){
        this.props.fetchAllProducts('taskoclockwoments');
    }
    render() {
     var {products}=this.props
    var tasks=products.map((product,index)=>{
        if(index<12){
         return <ItemProduct
                   key={index}
                   product={product}
                   img={product.img}
                   id={product.id}
                   name={product.name}
                   introduce={product.introduce}
                   price={product.price}
         />
       }
     })
        return (
       <div className="right-item-cat" style={{width: '73%'}}>
  <div className="row">
   {tasks}
  </div>
   <div className="list-pages">
    <NavLink to="/donghonu">1</NavLink>
    <NavLink to="/donghonu/page2">2</NavLink>
    <NavLink to="/donghonu/page3">3</NavLink>
    <NavLink to="/donghonu/page4">4</NavLink>
    <NavLink to="/donghonu/page5">5</NavLink>
  </div>
</div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        products:state.products
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        fetchAllProducts:(taskoclockwoments)=>{
            dispatch(getData(taskoclockwoments))
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(MainRight);