import { _WordleGridProps } from '../types'
import { WordleRow } from './WordleRow'

export default function WordleGrid({
	currentGuess,
	guesses,
	turn
}: _WordleGridProps): JSX.Element {
	return (
		<div>
			{guesses.map((guess, index) => {
				if (turn === index) {
					return <WordleRow key={index} currentGuess={currentGuess} />
				}
				return <WordleRow key={index} guess={guess} />
			})}
		</div>
	)
}
