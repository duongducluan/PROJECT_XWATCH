import React, { Component } from 'react';
import Mainfirst from '../components/MensWatch/Mainfirst1';
import LeftShow from '../components/DetailProductAc/LeftShow1';
import MainContend from '../components/DetailProductAc/MainContend2';
import RightTable3 from '../components/DetailProductAc/RightTable3';
import MainDetail from '../components/DetailProductAc/MainDetail4';
import Slider from '../components/DetailProductAc/Slider5';
import KnowLegde from '../components/DetailProductAc/KnowLegde6';
import ConFirm from '../components/DetailProductAc/ConFirm7';
import Footer from "../components/Footer";
import Header from "../components/Header";
class DetailProductAc extends Component {
  render() {
    var {match}=this.props;
    console.log(match.params.id) 
    return (
      <div>
      <Header/>
      <section>
        <div className="container">
          <Mainfirst />
          <div className="row product">
            <LeftShow match={match} />
            <MainContend />
            <RightTable3/>
         </div>
         <MainDetail/>
         <Slider/>
         <KnowLegde/>
         <ConFirm/>
    </div>
      </section>
        <Footer />
        </div>
    )
  }
}
export default DetailProductAc;
