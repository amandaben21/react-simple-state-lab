import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

     clickEvent = () =>{
         this.setState({color: '#333'})
    }

    /*has an event listener that, when clicked, calls this.setState() once 
    (make sure you aren't setting state directly, but instead using the component's 'setState' method) */
    render() {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.clickEvent}></div>
        )
    }
}