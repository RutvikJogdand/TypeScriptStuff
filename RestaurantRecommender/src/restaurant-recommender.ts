import restaurants from './restaurants';

const hour: number = 12;
const dollarSigns = '$$';
const deliveryTimeMax = '90';
const maxDistance = 10;
let result:string;

const priceBracket: number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
  if (Number(restaurant.priceBracket) > priceBracket) {
    return false;
  }

  if( Number(restaurant.openHour) > hour ){
    return false;
  }

  if(Number(restaurant.closeHour) < hour){
    return false;
  }

  if (Number(restaurant.deliveryTimeMinutes) > Number(deliveryTimeMax)) {
    return false;
  }

  if (Number(restaurant.distance) > maxDistance) {
    return false;
  }

  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  result = `We found ${filteredRestaurants.length} restaurants, they are:` + filteredRestaurants.map(item => item.name);
}

console.log(result);
