/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import SearchPage from './page'
beforeEach(() => {
  fetchMock.mockIf(/^https?:\/\/themoviedb.org.*$/, (req) => {
    if (req.url.endsWith('/popular')) {
      return 'some response body'
    } else {
      return {
        status: 404,
        body: 'Not Found',
      }
    }
  })
})

it('App Router: Works with Server Components', () => {
  render(<SearchPage searchParams={{ page: 1 }} params={null} />)
  expect(screen.getByRole('heading')).toHaveTextContent('App Router')
})
