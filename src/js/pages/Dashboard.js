import React from "react";
import axios from 'axios';
// require('../../sass/dash.scss');
require('../../sass/dashboard.scss');
require('../../sass/grid.scss');
import {MorphIcon, CloseButton, NavButton, PlusButton} from 'react-svg-buttons';


export default class Dashboard extends React.Component{

    constructor(){
        super();
        this.state = {};
    }

    componentDidMount(){
        axios.all([
            axios.post('http://localhost:1234/api/widget/getfuel'),
            axios.post('http://localhost:1234/api/widget/getdatarate'),
            axios.post('http://localhost:1234/api/widget/getmeta')

        ])
            .then(axios.spread((fuel,datarate,meta) => {
                this.setState({
                    fuel:fuel.data.data[0].fuel,
                    datarate:datarate.data.data[0].data,
                    a1:meta.data.data[0].a1,
                    a2:meta.data.data[0].a2,
                    a3:meta.data.data[0].a3,
                    a4:meta.data.data[0].a4,
                    a5:meta.data.data[0].a5,
                    a6:meta.data.data[0].a6,
                    a7:meta.data.data[0].a7,
                    a8:meta.data.data[0].a8
                })
            }))
    }

    render(){
        console.log(this.state.datarate)
        setTimeout(() => {
            this.componentDidMount();
        },1000)

        return(
            <div className="wrapper">
                {/*<ul className="data">{this.state.user}</ul>*/}
                {/*<ul className="data">{this.state.fueldata}</ul>*/}

                <div className="wid box11">
                    <div className="wid-cont-box">
                        <div className="wid-tb">CARS TRACKED<span className="wid-des"></span></div>
                        <div className="wid-tb-cont">{this.state.fuel}<span id="wid-cont-span">Cars/sec</span></div>
                        <div className=""></div>
                    </div>
                </div>
                <div className="wid box12">
                    <div className="wid-tb">STATISTICS
                        <span className="wid-des">- Fuel Consumed per day</span>
                        <div className="closebtn"><CloseButton size={19} color="#3bf9da" thickness={2} onClick={this.myClick} /></div>
                    </div>
                    <div className="wid-graph"><img src="../../images/graph.gif"/></div>

                </div>
                <div className="wid box13">
                    <div className="wid-cont-box">
                        <div className="wid-tb">CARS IMMOBILIZED<span className="wid-des"></span></div>
                        <div className="wid-tb-cont">{this.state.fuel}<span id="wid-cont-span">Cars/hr</span></div>
                    </div>
                </div>
                <div className="wid box14">
                    <div className="wid-tb">DATA TRANSFER RATE</div>
                    <div className="wid-cont-box">
                        <div className="wid-tb-cont">{this.state.datarate}<span id="wid-cont-span">GB/sec</span></div>
                        <div className="wid-bar"><div className="wid-bar-fill" style={{height:this.state.datarate/100 + "vh"}}></div></div>
                    </div>
                </div>
                <div className="wid box15">
                    <div className="wid-tb">BEACONS SEND</div>
                    <div className="wid-cont-box">
                        <div className="wid-tb-cont">{this.state.a1}<span id="wid-cont-span">becons/sec</span></div>
                    </div>
                </div>

                <div className="wid box21">
                    <div className="wid-tb">FUEL CONSUMED</div>
                    <div className="wid-cont-box">
                        <div className="wid-tb-cont">{this.state.a2}<span id="wid-cont-span">Lit</span></div>
                    </div>
                </div>
                <div className="wid box22">
                    <div className="wid-tb">BEACONS SEND</div>
                    <div className="wid-cont-box">
                        <div className="wid-tb-cont">{this.state.a3}<span id="wid-cont-span">bec/sec</span></div>
                    </div>
                </div>

                <div className="wid box23 banner"></div>

                <div className="wid box24">
                    <div className="wid-tb">MILES COVERED</div>
                    <div className="wid-cont-box">
                        <div className="wid-tb-cont">{this.state.a4}<span id="wid-cont-span">Miles/sec</span></div>
                    </div>
                </div>
                <div className="wid box25">
                    <div className="wid-tb">DATARATE</div>
                    <div className="wid-cont-box">
                        <div className="wid-tb-cont">{this.state.a5}<span id="wid-cont-span">GB/sec</span></div>
                    </div>
                </div>

                <div className="wid box31">
                    <div className="wid-tb">REQUESTS</div>
                    <div className="wid-cont-box">
                        <div className="wid-tb-cont">{this.state.a6}<span id="wid-cont-span">Requests/sec</span></div>
                    </div>
                </div>
                <div className="wid box32">
                    <div className="wid-tb">FUEL CONSUMED</div>
                    <div className="wid-cont-box">
                        <div className="wid-tb-cont">{this.state.a7}<span id="wid-cont-span">Lit</span></div>
                    </div>
                </div>
                <div className="wid box33">
                    <div className="wid-tb">CARS TRACKED</div>
                    <div className="wid-cont-box">
                        <div className="wid-tb-cont">{this.state.a7}<span id="wid-cont-span">Cars/sec</span></div>
                    </div>
                </div>
                <div className="wid box34">
                    <div className="wid-tb">STATISTICS</div>
                    <div className="wid-cont-box">
                        <div className="wid-tb-cont">{this.state.a7}<span id="wid-cont-span">stats</span></div>
                    </div>
                </div>

                <div className="wid box41"></div>
                <div className="wid box42"></div>
                <div className="wid box43"></div>
                <div className="wid box44"></div>
                <div className="wid box45"></div>

            </div>
        );
    }
}