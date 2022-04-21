import React, { Component } from 'react';

class ButtonWithClass extends Component {
    //constuctor metódus
    constructor() {
        //super = natív js. amikor extendelünk egy classt, ezzel tudjuk meghívni az ő constructor-át (itt: COmponent nevű class constructora)
        super()
        //this utal vissza a később létrehozott objektumra
        this.state = {
            key1: "This is the default state of a class component",
            key2: 0,
            title: {
                main: "main title",
                sub: "subtitle"
            },
            countries: []
        }

        console.log("1");


       
    }

    //mwgváltozik a state
    //sorrend: 1-2-3-2
    componentDidMount() {
        console.log("3");
        fetch('https://restcountries.com/v3.1/all')
        .then( (res) => res.json())
        .then(countriesData => this.setState(


            () => { 
                return {countries: countriesData}
            },


            () => console.log(this.state)
        ))
    }
    //setstate: async!!!


    render() {
        console.log("2");
        return (
            <div>
                <button onClick={() => this.setState({key1: "Clicked"}) }> {this.state.key1} </button>


                <button onClick={() => this.setState({key2: 1})}>{this.state.key2}</button> 



{/* 
                <button onClick={() => {
                    this.setState({title: {
                        main: "h1", 
                        sub: "h3"
                        }
                    })
                console.log(this.state);
                }
                }>{this.state.title.main}, {this.state.title.sub}
                </button> 
 */}


                <button onClick={() => {
                    this.setState(
                        () => {
                            return {
                                title: {
                                    main: "h1", 
                                    sub: "h3"
                                }
                            }
                        }, 
                        () => {console.log(this.state);}
                    )
                }
                }>{this.state.title.main}, {this.state.title.sub}
                </button> 


{/* 
                <button onClick={() => {
                    this.state.key2=1
                    console.log(this.state)
                }
                }>{this.state.key2}</button> 
                ez itt nem működik, a this.state.key2 csak az értékét változtatja meg, de nem rendereli újra a keyt
                */}




                <div className='countries'>
                    {this.state.countries.map( (country, index) => <div key={index}>{country.name.common}</div>)}
                </div>     
            </div>
        );
    }
}

export default ButtonWithClass;