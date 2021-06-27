import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }
    
    // has an event listener that, when clicked, sets state's 'color' key to a value of '#333'
    clickEvent = () => {   
        this.setState({color: '#333'})
    }
    
    render() {
        return (
            <div onclick= {this.clickEvent} className="cell" style={{backgroundColor: this.state.color}} >
            </div>
        )
    }
}