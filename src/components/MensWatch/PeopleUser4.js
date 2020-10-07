import React, { Component } from 'react';
import icon1 from './../../img/icon1.PNG';
import icon2 from './../../img/icon2.PNG';
import icon3 from './../../img/icon3.PNG';
import { NavLink } from "react-router-dom";
class PeopleUser extends Component {
    render() {
        return (
            <React.Fragment>
                <NavLink activeClassName="actives" to="/donghonam">
                    <div className="wp-user">
                        <img alt="" src={icon1} />
                        <h1>Dành cho nam</h1>
                    </div>
                </NavLink>


                <NavLink activeClassName="actives" to="/donghonu">
                    <div className="wp-user">
                        <img alt="" src={icon3} />
                        <h1>Dành cho nử</h1>
                    </div>
                </NavLink>


                <NavLink activeClassName="actives" to="/capdoi">
                    <div className="wp-user">
                        <img alt="" src={icon2} />
                        <h1 href>Cặp đôi</h1>
                    </div>
                </NavLink>
            </React.Fragment>


        )
    }
}
export default PeopleUser;
