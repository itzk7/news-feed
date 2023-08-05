import './stories.css'
import { useEffect, useState } from "react"
import {GetTopStoryIds} from '../http/hackernews';
import { Story } from './story';


const Stories = () => {
    const [storyIds, setStoryIds] = useState([]);
    
    useEffect(() => {
        GetTopStoryIds()
        .then(res => {
            setStoryIds(res.data.slice(0,20))
            // setStoryIds(res.data)
        })
        .catch(err => console.log("something went wrong", err))
    }, [])

    return (
        <>
        <div className='stories-container'>
            <h1>Top stories</h1>
        </div>
        <div className='stories-container'>
            {storyIds.map(id => <Story key = {id} storyId = {id}/>)}
        </div>
        </>
    )
}

export default Stories