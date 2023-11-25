/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Page from './page'
// beforeEach(() => {
//   // if you have an existing `beforeEach` just add the following lines to it
//   fetchMock.mockIf(/^https?:\/\/themoviedb.org.*$/, (req): { status: number; body: string } => {
//     if (req.url.endsWith('/popular')) {
//       return { status: 200, body: '{}' }
//     } else {
//       return {
//         status: 404,
//         body: 'Not Found',
//       }
//     }
//   })
// })

it('App Router: Works with Server Components', () => {
  render(<Page params={{ slug: ['test_1234'] }} />)
  expect(screen.getByRole('heading')).toHaveTextContent('App Router')
})
