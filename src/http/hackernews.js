import HackerNewsClient from "./client"

const GetTopStories = async () => {
    const response = await HackerNewsClient.get("/topstories.json")
    return response
}

export default GetTopStories