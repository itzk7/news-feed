
import {render, screen, fireEvent} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import Story from "../story";
import '@testing-library/jest-dom'
import { FavoriteIDsContext } from '../context';

const server = setupServer(
    rest.get('https://hacker-news.firebaseio.com/v0/item/123.json', async (req, res, ctx) => {
    const story = {
        title: "Story 1",
        by: "Steve Rogers",
        descendants: 100,
        time: 1691309212,
        id: 123
    }
      return res(ctx.json(story))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test ('should able to get data and paint it in story comp', async () => {
    var favIds = []
    const setFavIds = () => {}
    render(
        <FavoriteIDsContext.Provider value={[favIds, setFavIds]}>
            <Story storyId = {123}/>
        </FavoriteIDsContext.Provider>
    )  

    await screen.findByText(/100/)
    expect(screen.getByText(/Steve Rogers/)).toBeInTheDocument();
    expect(screen.getByText(/🗓 August 6th 2023, 🕒 1:36:52 pm/)).toBeInTheDocument();
    
    fireEvent.click(screen.getByRole('button'))
})