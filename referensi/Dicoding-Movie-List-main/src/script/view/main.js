import '../component/data-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const dataListElement = document.querySelector("data-list");

    const onButtonSearchClicked = () => {
        searching(searchElement.value);
    };

    const searching = async (keyword) => {
        try{
            const result = await DataSource.searchFilm(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const searchingTrending = async () => {
        try{
            const result = await DataSource.searchTrending();
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    
    searchingTrending();

    const renderResult = results => {
        dataListElement.films = results;
    };

    const fallbackResult = message => {
        dataListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;