function selectRestaurant(restaurants) {
    let randomItem = restaurants[Math.floor(Math.random()*restaurants.length)]; 

    return randomItem;
}

export default selectRestaurant;