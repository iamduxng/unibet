import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import '@testing-library/jest-dom'

const mockHomeProps = {
  matches: []
}

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home matches={mockHomeProps.matches} />)
    const headlineH1 = screen.getAllByTestId('home-headline')
    expect(headlineH1).toBeInTheDocument()
  })
})
