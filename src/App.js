import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MensWatch from './pages/MensWatch';
import MensWatch1 from './pages/MensWatch1';
import WomensWatch from './pages/WomensWatch';
import WomensWatch1 from './pages/WomensWatch1';
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';
import DetailProductWm from './pages/DetailProductWm';
import DetailProductDb from './pages/DetailProductDb';
import DetailProductAc from './pages/DetailProductAc';
import NotFoundPage from './pages/NotFoundPage';
import CartItem from './pages/CartItem';
import DoubleWatch from './pages/DoubleWatch';
import DoubleWatch1 from './pages/DoubleWatch1';
import TradeMark from './pages/TradeMark';
import WatchAccessories from './pages/WatchAccessories';
import AboutWatch from './pages/AboutWatch';
import ClockEvaluation from './pages/ClockEvaluation';
import './pages/style.js';
class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div className="App">
        {/* <Header /> */}
          <Switch>
            <Route exact path='/'>
              {({ history,match }) => (
                <Home history={history} match={match} />
              )}
            </Route>
            <Route path='/vexwatch'>
                <AboutWatch/>
            </Route>
            <Route path='/thuonghieu'>
              <TradeMark />
            </Route>
            {/* <Route exact path='/donghonam' 
            component={MensWatch}
            /> */}
            <Route
              path='/donghonam'
              render={({ match }) => {
                return <MensWatch match={match} />;
              }}
            />
            <Route exact path='/donghonam/page2'>
              <MensWatch1 />
            </Route>
            <Route exact path='/donghonu'>
              <WomensWatch />
            </Route>
            <Route exact path='/donghonu/page2'>
              <WomensWatch1 />
            </Route>
            <Route exact path="/capdoi">
              <DoubleWatch />
            </Route>
            <Route exact path="/capdoi/page2">
              <DoubleWatch1 />
            </Route>
            <Route exact path="/thamdinhdongho">
              <ClockEvaluation />
            </Route>
            <Route path="/capdoi/product/:id/detail">
              {({ history, match }) => (
                <DetailProductDb match={match} history={history} />)}
            </Route>
            <Route path="/product/:id/detail">
              {({ history, match }) => (
                <DetailProduct match={match} history={history} />)}
            </Route>
            <Route path="/donghonu/product/:id/detail">
              {({ history, match }) => (
                <DetailProductWm match={match} history={history} />)}
            </Route>
            <Route path="/cartitem">
              <CartItem />
            </Route>
            <Route exact path="/phukiendongho">
              <WatchAccessories />
            </Route>
            <Route path="/phukiendongho/product/:id/detail">
              {({ history, match }) => (
                <DetailProductAc history={history} match={match} />)}
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
