import React, { Component } from 'react';

class ButtonWithClass extends Component {
    //constuctor metódus
    constructor() {
        //super = segít összekötni a contructoron keresztül a componensek között
        super()
        //this utal vissza a később létrehozott objektumra
        this.state = {
            key1: "This is the default state of a class component",
            key2: 0
        }


       
    }

   


    render() {
        return (
            <div>
                <button onClick={() => this.setState({key1: "Clicked"}) }> {this.state.key1} </button>
                <button onClick={() => this.setState({key2: 1})}>{this.state.key2}</button>
            </div>
        );
    }
}

export default ButtonWithClass;