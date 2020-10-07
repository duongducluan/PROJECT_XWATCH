import React, { Component } from 'react';
import Mainfirst from '../components/TradeMark/Mainfirst1';
import Footer from "../components/Footer";
import Header from "../components/Header";
import ListWord from "../components/TradeMark/ListWord3";
import DisplayItems from "../components/TradeMark/DisplayItems4";
import { addImg } from "./../actions/index";
import { connect } from "react-redux";
class WomensWatch extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <div className="container">
            <Mainfirst />
            <ListWord />
            <DisplayItems />
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    imgtrademark: state.imgtrademark
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addImages: (value) => {
      dispatch(addImg(value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WomensWatch);
