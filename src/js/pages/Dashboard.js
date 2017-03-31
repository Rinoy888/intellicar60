import React from "react";
require('../../sass/dash.scss');

export default class Dashboard extends React.Component{

    constructor(){
        super();

        this.state = {per:90 + '%'};
        this.state = {data:70};
        this.state = {cars:30};

    }

    render(){

        setTimeout(() => {
            if(!this.i){
                this.i = 90;
                this.data = 70;
                this.cars = 30
            }

            this.setState({per: this.i + '%',data:this.data,cars:this.cars});
            this.i++;
            this.data++;
            this.cars++;

            if(this.i == 91){this.i = 60;}
            if(this.i == 61){this.i = 30;}
            if(this.i == 31){this.i = 90;}

            if(this.data == 71){this.data = 40;}
            if(this.data == 41){this.data = 180;}
            if(this.data == 181){this.data = 70;}

            if(this.cars == 31){this.cars = 50;}
            if(this.cars == 51){this.cars = 68;}
            if(this.cars == 69){this.cars = 30;}
            console.log(this.i);
            console.log(this.data);
        }, 2000);


        return(

                            <div className="db-cont">
                                <div className="db-wid w-1">
                                    <div className="wid-cont-box">
                                        <div className="wid-tb">CARS TRACKED<span className="wid-des"></span></div>
                                        <div className="wid-tb-cont">{this.state.cars}<span id="wid-cont-span">Cars/sec</span></div>
                                    </div>
                                </div>
                                <div className="db-wid w-2">
                                    <div className="wid-tb">STATISTICS<span className="wid-des">- Fuel Consumed per day</span></div>
                                    <div className="wid-graph"><img src="../../images/graph.gif"/></div>
                                </div>
                                <div className="db-wid w-1">
                                    <div className="wid-cont-box">
                                        <div className="wid-tb">CARS IMMOBILIZED<span className="wid-des"></span></div>
                                        <div className="wid-tb-cont">{this.state.cars}<span id="wid-cont-span">Cars/hr</span></div>
                                    </div>
                                </div>
                                <div className="db-wid w-2">
                                    <div className="wid-tb">DATA TRANSFER RATE</div>
                                    <div className="wid-cont-box">
                                        <div className="wid-tb-cont">{this.state.data}<span id="wid-cont-span">GB/sec</span></div>
                                        <div className="wid-bar"><div className="wid-bar-fill" style={{height:this.state.per}}></div></div>
                                    </div>
                                    {/*<div className="wid-tb"></div>*/}
                                </div>
                                <div className="db-wid w-1">


                                </div>
                                <div className="db-wid w-1-2">
                                    <div className="wid-tb"></div>
                                </div>
                                {/*<div className="db-wid w-1">*/}
                                    {/*<div className="wid-tb"></div>*/}
                                {/*</div>*/}
                                {/*<div className="db-wid w-1">*/}
                                     {/*<div className="wid-tb"></div>*/}
                                {/*</div>*/}
                                {/*<div className="db-wid w-1">*/}
                                    {/*<div className="wid-tb"></div>*/}
                                {/*</div>*/}
                                {/*<div className="db-wid w-1">*/}
                                    {/*<div className="wid-tb"></div>*/}
                                {/*</div>*/}
                            </div>


        );
    }
}