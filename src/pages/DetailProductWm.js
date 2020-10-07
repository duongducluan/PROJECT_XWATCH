import React, { Component } from 'react';
import Mainfirst from '../components/MensWatch/Mainfirst1';
import LeftShow from '../components/DetailProductWm/LeftShow1';
import MainContend from '../components/DetailProductWm/MainContend2';
import RightTable3 from '../components/DetailProductWm/RightTable3';
import MainDetail from '../components/DetailProductWm/MainDetail4';
import Slider from '../components/DetailProductWm/Slider5';
import KnowLegde from '../components/DetailProductWm/KnowLegde6';
import ConFirm from '../components/DetailProductWm/ConFirm7';
import Footer from "../components/Footer";
import Header from "../components/Header";
class DetailProductWM extends Component {
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
export default DetailProductWM;
