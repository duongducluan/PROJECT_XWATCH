import React, { Component } from "react";
import Header from "./../components/Header";
import MainFirst from "../components/aboutWatch/MainFirst1";
import ContendLeft from "./../components/aboutWatch/Contend/ContendLeft";
import ContendRight from "./../components/aboutWatch/Contend/ContendRight";
import MainContendLeft from "./../components/aboutWatch/MainContend/MainContendLeft";
import MainContendRight from "./../components/aboutWatch/MainContend/MainContendRight";
import Pagination from "./../components/aboutWatch/Pagination";
import KnowList from "../components/MensWatch/KnowList8";
import ConfirmOclock from "../components/MensWatch/ConfirmOclock9";
import Footer from "../components/Footer";
class AboutWatch extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <div className="container">
            <MainFirst />
            <div className="row contend-xwatch">
            <ContendLeft/>
           <ContendRight/>
          </div>
            {/* main-contend4 */}
            <div className="row contend-xwatch main-contend1">
              {/* main-contend4-left */}
             <MainContendLeft/>
            {/* main-contend4-right */}
            <MainContendRight/>
            <Pagination/>
         <KnowList/>
            </div>
          </div>
        </section>
        <ConfirmOclock />
        <Footer />
      </div>
    );
  }
}

export default AboutWatch;
