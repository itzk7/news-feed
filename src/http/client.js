import axios from "axios"

const baseURL = "https://hacker-news.firebaseio.com/v0"


const HackerNewsClient = axios.create({
    baseURL: baseURL,
    headers: {
        Accept: 'application/json',
    },
});

export default HackerNewsClient