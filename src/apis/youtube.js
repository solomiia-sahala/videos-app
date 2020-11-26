import axios from 'axios';

const KEY = 'AIzaSyDKZdNWqyJyVG7R8VocNmdkr4jnja6k_04';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video',
    }
});