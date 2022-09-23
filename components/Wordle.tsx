import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import WordleGrid from './WordleGrid'

export default function Wordle({ solution }: { solution: string }) {
	const { currentGuess, guesses, isCorrect, turn, handleKeyUp } =
		useWordle(solution)

	useEffect(() => {
		document.addEventListener('keyup', handleKeyUp)
		return () => {
			document.removeEventListener('keyup', handleKeyUp)
		}
	}, [handleKeyUp])

	useEffect(() => {
		console.log('guesses: ', guesses)
		console.log('turn: ', turn)
		console.log('isCorrect: ', isCorrect)
	}, [guesses, turn, isCorrect])

	return (
		<div className='wordle'>
			<h1>Wordle</h1>
			<h1>Today&apos;s solution: {solution}</h1>
			<h1>Current guess: {currentGuess}</h1>
			<WordleGrid currentGuess={currentGuess} guesses={guesses} turn={turn} />
		</div>
	)
}

// Language: typescript
