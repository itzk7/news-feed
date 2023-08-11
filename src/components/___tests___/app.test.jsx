import React from "react";
import App from "../../App";
import {setupServer} from 'msw/node'
import {rest} from 'msw'
import { render, screen } from "@testing-library/react";

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
    rest.get('https://hacker-news.firebaseio.com/v0/topstories.json', async (req, res, ctx) => {
    return res(ctx.json([123]))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe("Jest Snapshot testing suite",  () => {
  it("Matches DOM Snapshot", async () => {
    const {asFragment} = render(<App/>);
    await screen.findByText(/Steve Rogers/)
    
    expect(asFragment()).toMatchSnapshot();
  });
});
