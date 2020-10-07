import React, { Component } from 'react';
import ItemProduct from './ItemProduct';
import {connect} from 'react-redux';
import {getData} from '../../../actions/index';
import {NavLink} from 'react-router-dom';
class MainRight extends Component {
    componentDidMount(){
        this.props.fetchAllProducts('taskoclockDb');
    }
    render() {
     var {products}=this.props
    var tasks=products.map((product,index)=>{
        if(index>=12){
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
   <NavLink to="/capdoi">1</NavLink>
    <NavLink to="/capdoi/page2">2</NavLink>
    <NavLink to="/capdoi/page3">3</NavLink>
    <NavLink to="/capdoi/page4">4</NavLink>
    <NavLink to="/capdoi/page5">5</NavLink>
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
        fetchAllProducts:(taskoclockDb)=>{
            dispatch(getData(taskoclockDb))
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(MainRight);