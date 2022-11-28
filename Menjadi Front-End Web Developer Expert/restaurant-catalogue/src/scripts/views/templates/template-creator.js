import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.pictureId}" alt="${movie.name}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${movie.city}</p>
    <h4>Address</h4>
    <p>${movie.address}</p>
    <h4>Rating</h4>
    <p>${movie.rating}</p>
    <h4>Description</h4>
    <p>${movie.description}</p>
  </div>
  <div class="movie__overview">
    <h3>Lastest Review</h3>
    <p>${movie.customerReviews[0].review}</p>
  </div>
  <div class="movie__overview">
    <h3>Top Menu</h3>
    <h3>Makanan</h3>
    <p>${movie.menus.foods[0].name}</p>
    <h3>Minuman</h3>
    <p>${movie.menus.drinks[0].name}</p>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${movie.name}"
           src="${movie.pictureId ? CONFIG.BASE_IMAGE_URL + movie.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${movie.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${movie.id}">${movie.name}</a></h3>
      <p>${movie.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
