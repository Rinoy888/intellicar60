import React from "react";
require('../../sass/style.scss');

export default class Header extends React.Component{

    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render(){

        return(
            <div className="maindiv">
                <div className="md-nav"></div>
            </div>
        );
    }
}