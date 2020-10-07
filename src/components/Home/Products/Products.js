import React,{Component} from 'react';
import Items from "./Items";
import {connect} from "react-redux";
import { getData} from './../../../actions/index';
class Products extends Component{
    componentDidMount(){
        this.props.fetchData('listoclock');
    }
    render(){
        var products=this.props;
        if(products.products){
        var tasks=products.products.map((product,index)=>{
            if(index>=12 && index<20){
              return <Items
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
    }
        return(
            <div className="row">
               {tasks}
            </div>   
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        products:state.products
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchData:(listoclock)=>{
            dispatch(getData(listoclock))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);