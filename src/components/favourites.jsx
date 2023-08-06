import './stories.css'
import { useContext} from "react"
import Story from './story';
import { FavoriteIDsContext } from './context';


const FavoriteStories = () => {
    const [favIds] = useContext(FavoriteIDsContext)

    return (
        <>
        <div className='stories-container'>
            <h1>Favorite stories</h1>
        </div>
        <div className='stories-container'>
            {favIds.map(id => <Story key = {id} storyId = {id}/>)}
        </div>
        </>
    )
}

export default FavoriteStories