
import './story.css'
import { useEffect, useState } from "react"
import { GetItemById } from '../http/hackernews';
import { formatUnixTime } from '../utils/date';


export const Story = (props) => {
    const [story, setStory] = useState({});
    
    useEffect(() => {
        console.log("ok", props)
        GetItemById(props.storyId)
        .then(res => {
            const s = res.data
            s.favorite = 
            setStory(res.data)
        })
        .catch(err => console.log("something went wrong", err))
    }, [props])

    return <div className = 'story-container'>
        <div className = "story-content">
            <p>{story.title}</p>
            <p>By {story.by}</p>
            <div className="story-meta">
                <p>{formatUnixTime(story.time)},  Comments({story.descendants})</p>
            </div>
            <a href={story.url} target="_blank" rel="noreferrer" className="btn">Read more</a>
        </div>
    </div>
}
