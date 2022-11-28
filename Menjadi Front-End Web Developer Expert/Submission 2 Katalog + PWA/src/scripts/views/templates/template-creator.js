import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
  <h4>Address</h4>
  <p>${restaurant.address} , Kota ${restaurant.city}</p>
  <h4>Rating</h4>
  <p>${restaurant.rating}</p>
  <h4>Categories</h4>
  <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
</div>

<div class="restaurant__description">
<h3>Description</h3>
<p>${restaurant.description}</p>

<br><h3>Menu</h3></br>
<p><h4>Foods:</h4></p>
${restaurant.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
<br><h4>Drinks:</h4></br>
${restaurant.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
 ${restaurant.customerReviews.reduce((show, value) => show.concat(`<br>
        <p>${value.name}</p>
        <p>${value.review}</p>
        <p>${value.date}</p>
        `), '<br><h4>Customer Reviews:</h4></br>')}
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
<div class="restaurant-item__header">
    <img loading="lazy" class="restaurant-item__header__poster" alt="${restaurant.name}"
    src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
    <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating} | ${restaurant.city}</span></p>
    </div>
</div>
<div class="restaurant-item__content">
    <h3 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
    <p>${restaurant.description}</p>
</div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
