import React from "react";
require('../../sass/style.scss');
import Header from "../components/Header";
import { Link } from "react-router";

import FaDesktop from 'react-icons/lib/fa/desktop';
import Fabar from 'react-icons/lib/fa/bar-chart';
import Fasettings from 'react-icons/lib/fa/cog';
export default class Layout extends React.Component{

    render(){

        return(
            <div className="maindiv">
                <div className="md-nav">

                    <div className="nav-logo-titile m-left">
                        <div className="lt-left">IN</div>
                        <div className="lt-top">TELLICAR</div>
                        <div className="lt-bottom">60SECS</div>
                    </div>
                    <div className="nav-logo m-left">
                        <div className="spinner-1"></div>
                        <div className="spinner-2"></div>
                        <div className="spinner-3"></div>
                    </div>

                    {/*<div className="md-log-box m-left">*/}
                        {/*<Link  className="nav-log " to="dashboard" activeClassName="active"><FaDesktop /></Link>*/}
                    {/*</div>*/}
                    {/*<div className="md-log-box">*/}
                        {/*<Link className="nav-log " to="features" activeClassName="active"><Fabar /></Link>*/}
                    {/*</div>*/}
                    {/*<div className="md-log-box">*/}
                        {/*<Link className="nav-log " to="settings" activeClassName="active"><Fasettings /></Link>*/}
                    {/*</div>*/}
                </div>
                {this.props.children}
            </div>
        );
    }
}