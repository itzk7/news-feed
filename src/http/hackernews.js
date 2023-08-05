import HackerNewsClient from "./client"

export const GetTopStoryIds = async () => {
    return await HackerNewsClient.get("/topstories.json")
}

export const GetItemById = async (id) => {
    return await HackerNewsClient.get(`/item/${id}.json?print=pretty`)
}
