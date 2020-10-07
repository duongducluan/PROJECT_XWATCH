import React, { Component } from 'react';
import Mainfirst from './../components/MensWatch/Mainfirst1';
import LeftShow from './../components/DetailProduct/LeftShow1';
import MainContend from './../components/DetailProduct/MainContend2';
import RightTable3 from './../components/DetailProduct/RightTable3';
import MainDetail from './../components/DetailProduct/MainDetail4';
import Slider from './../components/DetailProduct/Slider5';
import KnowLegde from '../components/DetailProduct/KnowLegde6';
import ConFirm from '../components/DetailProduct/ConFirm7';
import Footer from "./../components/Footer";
import Header from "./../components/Header";
class DetailProduct extends Component {
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
export default DetailProduct;
