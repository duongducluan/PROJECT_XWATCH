import React, { Component } from 'react';
import Mainfirst from '../components/MensWatch/Mainfirst1';
import LeftShow from '../components/DetailProductDb/LeftShow1';
import MainContend from '../components/DetailProductDb/MainContend2';
import RightTable3 from '../components/DetailProductDb/RightTable3';
import MainDetail from '../components/DetailProductDb/MainDetail4';
import Slider from '../components/DetailProductDb/Slider5';
import KnowLegde from '../components/DetailProductDb/KnowLegde6';
import ConFirm from '../components/DetailProductDb/ConFirm7';
import Footer from "../components/Footer";
import Header from "../components/Header";
class DetailProductDb extends Component {
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
export default DetailProductDb;
