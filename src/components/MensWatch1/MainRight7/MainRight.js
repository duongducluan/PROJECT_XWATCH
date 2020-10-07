import React, { Component } from 'react';
import ItemProduct from './ItemProduct';
import {connect} from 'react-redux';
import {getData} from './../../../actions/index';
import {NavLink} from 'react-router-dom'
class MainRight extends Component {
    componentDidMount(){
        this.props.fetchAllProducts('listoclock');
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
   <NavLink to="/donghonam">1</NavLink>
    <NavLink to="/donghonam/page2">2</NavLink>
    <NavLink to="/donghonam/page11">3</NavLink>
    <NavLink to="/donghonam/page11">4</NavLink>
    <NavLink to="/donghonam/page11">5</NavLink>
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
        fetchAllProducts:(listoclock)=>{
            dispatch(getData(listoclock))
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(MainRight);