import getFoodList from './getFoodList.js'

function populateArray() {
    let populatedArray = populateArray.bind(this);
    getFoodList (this.state.location.coords, this.state.next_page_token)
    .then(r => {
        if (r.next_page_token) {
            this.setState({next_page_token : r.next_page_token});
            let final = this.state.results.concat(r.results);
            this.setState({results : final});
            populatedArray();
        } else {
            let final = this.state.results.concat(r.results);
            this.setState({results : final}); 
            this.setState({retrieve: false});
        }     
    });
}

export default populateArray;