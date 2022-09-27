
import axios from 'axios';
class DataSource{
    static searchFilm(keyword){
        const getKeyword = keyword.toString();
        const restrictedPattern = /[^a-zA-Z,]/g;
        const searchKeyword = getKeyword.replace(restrictedPattern, '');
        if(searchKeyword !== ""){
            return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e8b5217e0637c0c2a1091f55478d6a50&language=en-US&query=${searchKeyword}&page=1&include_adult=false`)
            .then(
                ({data}) => { 
                    if (data.results) {
                        return Promise.resolve(data.results);
                    } else {
                        return Promise.reject(`${searchKeyword} is not found`);
                    }
                }
            )
        } else {
            return Promise.reject(`Please insert a film name!`);
        }
    }

    static searchTrending() {
        return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=e8b5217e0637c0c2a1091f55478d6a50`)
        .then(
            ({data}) => { 
                if (data.results) {
                    return Promise.resolve(data.results);
                } else {
                    return Promise.reject(`is not found`);
                }
            }
        )
    }
}

export default DataSource;