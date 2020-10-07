import React, { Component } from 'react';
import Mainfirst from './../components/MensWatch/Mainfirst1';
import Header from './../components/Header';
import Footer from './../components/Footer';
import TableCart from './../components/CartItem/TableCart2';
import InforBuy from './../components/CartItem/InforBuy4';
import AllButton from './../components/CartItem/AllButton3';
import TotalMoney from './../components/CartItem/TotalMoney';
class DetailProduct extends Component {
    render() {
        return (
            <div>
                <Header />
                <section>
                    <div className="container">
                        <Mainfirst/>
                        <TableCart/>
                        <TotalMoney/>
                        <AllButton/>
                        <InforBuy/>
                </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default DetailProduct;
