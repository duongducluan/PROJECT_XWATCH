import React, { Component } from 'react';
import Mainfirst from '../components/MensWatch/Mainfirst1';
import Styleoclock from '../components/MensWatch/Styleoclock2';
import Mainconten from '../components/WomensWatch/MainConten3';
import PeopleUser from '../components/MensWatch/PeopleUser4';
import SortList from '../components/MensWatch/SortList5';
import MainLeft from '../components/MensWatch/MainLeft6';
import MainRight from '../components/WomensWatch/MainRight7/MainRight';
import KnowList from '../components/MensWatch/KnowList8';
import ConfirmOclock from '../components/MensWatch/ConfirmOclock9';
import Footer from "../components/Footer";
import Header from "../components/Header";
class WomensWatch extends Component {
  render() {
    return (
      <div>
        <Header/>
        <section>
          <div className="container">
            <Mainfirst />
            <Styleoclock />
            <Mainconten />
            <div className="cat-title mac-flex">
            <PeopleUser />
            <SortList />
            </div>
            <div className="wrap-cat mac-flex">
              <MainLeft />
              <MainRight />
            </div>
            <KnowList />
            <ConfirmOclock />
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
}
export default WomensWatch;
