
import './story.css'
import { useContext, useEffect, useState } from "react"
import { GetItemById } from '../http/hackernews';
import { formatUnixTime } from '../utils/date';
import {ReactComponent as NotFavLogo} from '../img/fav-not-selected.svg';
import {ReactComponent as FavLogo} from '../img/fav-selected.svg';
import { FavoriteIDsContext } from './context';


const Story = (props) => {
    const [story, setStory] = useState({});
    const [favIds, setFavIds] = useContext(FavoriteIDsContext)
    const [isFav, setIsFav] = useState();
    useEffect(() => {
        GetItemById(props.storyId)
        .then(res => {
            console.log(res.data)
            setStory(res.data)
        })
        .catch(err => console.log("something went wrong", err))
    }, [props])

    useEffect(() => setIsFav(favIds.includes(props.storyId)), [props, favIds])

    const removeFromFav = (id) => {
        const filteredIDs = favIds.filter(i => i !== id)
        setFavIds(filteredIDs)
        setIsFav(!isFav)
    }

    const addToFav = (id) => {
        const newIds = [].concat(favIds, id)
        setFavIds(newIds)
        setIsFav(!isFav)
    }

    return (
    <div className = 'story-container'>
        <div className = "story-content">
            <a className='story-title' href={story.url} target="_blank" rel="noreferrer">
                {story.title}
            </a>
            <p>- By,  {story.by} </p>
            <div className="story-meta">
                <p>{formatUnixTime(story.time)}</p>
                <p>💬 Comments ({story.descendants})</p>
                <>
                {isFav && <button className='icon-button' onClick={ () => removeFromFav(story.id)}>
                            <FavLogo />
                        </button>}
                        {!isFav && <button className='icon-button' onClick={() => addToFav(story.id)}>
                            <NotFavLogo />
                        </button> }
                </>
            </div>
        </div>
    </div>
    )
}

export default Story