import { useState } from 'react'

const useWordle = (solution: string) => {
	// console.log('The solution is: ', solution)
	const [guess, setGuess] = useState<string>('')
	const [currentGuess, setCurrentGuess] = useState<string>('')
	const [guesses, setGuesses] = useState<string[]>([])
	const [isCorrect, setIsCorrect] = useState<boolean>(false)
	const [history, setHistory] = useState<string[]>([])
	const [isWrong, setIsWrong] = useState<boolean>(false)
	const [isComplete, setIsComplete] = useState<boolean>(false)
	const [turn, setTurn] = useState<number>(0)

	// format a guess into an array of letter objects
	// eg: { key: 'a', color: 'yellow' }
	const formatGuess = (guess: string) => {}

	// add a new guess to the guess state
	// update isCorrect if the guess is correct
	// add one to the turn state
	const addGuess = (guess: string) => {}

	// handle the keyup event & track the current guess
	// detect when a user hits the enter key
	const handleKeyUp = ({ key }: { key: string }) => {
		if (key === 'Backspace') {
			return setCurrentGuess(prev => prev.slice(0, -1))
		}

		if (/^[A-Za-z]$/.test(key)) {
			if (currentGuess.length < 5) {
				setCurrentGuess(prev => prev + key)
			}
		}
	}

	return {
		currentGuess,
		guesses,
		isCorrect,
		turn,
		handleKeyUp
	}
}

export default useWordle

// Language: typescript
// Path: pages/useWordle.tsx
