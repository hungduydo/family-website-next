import { render, screen } from '@testing-library/react'
import siteMetadata from '@/data/siteMetadata'
import HomeBanner from 'app/(header)/home/HomeBanner'

describe('HomeBanner', () => {
  it('renders a heading', () => {
    render(<HomeBanner />)

    const heading = screen.getByRole('heading', {
      name: siteMetadata.headerTitle,
    })

    expect(heading).toBeInTheDocument()

    const description = screen.getByRole('heading', {
      name: siteMetadata.description,
    })

    expect(description).toBeInTheDocument()
  })
})
