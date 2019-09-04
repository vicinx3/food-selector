function getFoodList(location, next_page_token) {
    const {latitude, longitude} = location;
    
    let url = "https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    
    if (next_page_token) {
        url = url + "pagetoken=" + next_page_token;
    }
    
    url = url + "&location=" + latitude + "," + longitude + "&radius=2000&type=restaurant&key=AIzaSyCok_Pcl9v5O3vwCT3YmXnKKJAQsJzRCtA";

    return (fetch(url)
            .then(r => r.json())
    )

}

export default getFoodList
