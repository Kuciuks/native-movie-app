import Constants from 'expo-constants';

const apiKey = Constants.expoConfig?.extra?.EXPO_MOVIE_API_KEY;


const getMovies = ({movieName}: any)=>{
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error: any) => console.error('Error fetching movies:', error.json()))
}

export default getMovies
