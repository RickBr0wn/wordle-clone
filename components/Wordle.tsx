import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

export default function Wordle({ solution }: { solution: string }) {
	const { currentGuess, handleKeyUp } = useWordle(solution)

	useEffect(() => {
		document.addEventListener('keyup', handleKeyUp)
		return () => {
			document.removeEventListener('keyup', handleKeyUp)
		}
	}, [handleKeyUp])

	return (
		<div className='wordle'>
			<h1>Wordle</h1>
			<h1>Today&apos;s solution: {solution}</h1>
			<h1>Current guess: {currentGuess}</h1>
		</div>
	)
}

// Language: typescript
