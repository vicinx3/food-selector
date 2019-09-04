import React from 'react';
import populateArray from './populateArray.js'
import "./App.css"
import selectRestaurant from './selectRestaurant.js'
//AIzaSyC_BS0F2LK8bzyN3Jx1eeqFBNtE4KGYfzo

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            location: "",
            retrieve: true,
            results: [],
            next_page_token: "",
            isLoaded: false,
            final_restaurant: "",
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.final_restaurant === "") {
            function success(location) {
                this.setState({location : location});
                let populatedArray = populateArray.bind(this);
                populatedArray();
            } 
            navigator.geolocation.getCurrentPosition(success.bind(this));
        } else {
            this.setState({final_restaurant: selectRestaurant(this.state.results)});
        }
    }

    componentDidUpdate() {
        if (this.state.retrieve === false) {
            this.setState({final_restaurant: selectRestaurant(this.state.results)});
            this.setState({retrieve: true});
        }
    }

    render() {
        if (this.state.final_restaurant === "") {
            return (
                <div>
                    <h1>For the indecisive</h1>
                    <button onClick = {this.handleClick}>Get random restaurant</button>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>You should eat at</h1>
                    <h2>{this.state.final_restaurant.name}</h2>
                    <h2>Rated at: {this.state.final_restaurant.rating}/5</h2>
                    <h2>Located at: {this.state.final_restaurant.vicinity}</h2>
                    <button onClick = {this.handleClick}>Get random restaurant</button>
                </div>
            )
        }
                    
    }
}

export default App; 
