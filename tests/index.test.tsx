import { screen } from '@testing-library/react'
import { render } from '../test-utils'

import Wordle from '../components/Wordle'

describe('Home', () => {
	it('should render a main section', () => {
		const { getByText } = render(<Wordle solution='_TEST' />)
		const text = getByText(/wordle/i)
		expect(text).toBeInTheDocument()
	})
})
