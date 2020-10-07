import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
class Header extends Component {
    render() {
      //style();
        return (
            <header>
            <div className="top-header mac-flex mac-flex-justify mac-flex-middle">
              <div className="left-header">
                <img alt="" className="logo-img" src="https://xwatch.vn/images/config/xwatch-logo-small_1562275266.png" />
              </div>
              <div className="right-header mac-flex mac-flex-middle">
                <div className="search">
                  <i className="fab fa-sistrix icon-search" style={{fontSize: 24}} />
                  <input type="text" name="input" className="input-search" placeholder="search" />
                </div>
                <div className="store">
                  Cửa Hàng
                </div>
                <div className="call">
                  <i className="fas fa-phone phone" />
                  <div className="buy">MUA HÀNG</div>
                  <h2>1900.0325</h2>
                </div>
                <div className="cart">
                  <Link to='/cartitem'>
                  <ShoppingCartIcon style={{color:'white'}}/>
                  <span className='cart-count' style={{color:'blue'}}>{this.props.tasks.length}</span>
                  </Link>
                </div>
              </div>
            </div>
            <nav>
              <div className="navbar">
                <ul className="wrap-nav mac-flex">
                  <li className="icon-home">
                  <NavLink activeStyle={{
                    border:"1px solid red"
                  }} exact to="/"><img  alt="" src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-home-icon-png-image_3568907.jpg" style={{width: 25, height: 25}} /></NavLink>
                  </li>
                  <li><NavLink activeStyle={{
                    color:"red"
                  }} to="/vexwatch">VỀ XWATCH</NavLink></li>
                  <li><NavLink activeStyle={{
                    color:"red"
                  }} to="/thuonghieu">THƯƠNG HIỆU</NavLink></li>
                  <li><NavLink activeStyle={{
                    color:"red"
                  }}to="/donghonam">ĐỒNG HỒ NAM</NavLink></li>
                  <li><NavLink activeStyle={{
                    color:"red"
                  }} to="/donghonu">ĐỒNG HỒ NỮ</NavLink></li>
                  <li><NavLink 
                    activeStyle={{
                      color:"red"
                    }}
                   to="/thamdinhdongho" alt="true">THẨM ĐỊNH ĐỒNG HỒ</NavLink></li>
                  <li><a href="#" alt="true">SỬA CHỬA</a></li>
                  <li><NavLink activeStyle={{
                      color:"red"
                  }}to="/phukiendongho">
                      PHỤ KIỆN
                  </NavLink></li>
                </ul>
              </div>
            </nav>
          </header>
          

        )
    }
}
const mapStateToProps=(state)=>{
  return{
    tasks:state.tasks
  }
}
export default connect(mapStateToProps,null)(Header);
