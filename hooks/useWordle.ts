import { useState } from 'react'

interface _UseWordleProps {
	solution: string
}

const useWordle = ({ solution }: _UseWordleProps) => {
	console.log('The solution is: ', solution)
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
	const handleKeyUp = (e: React.KeyboardEvent) => {}

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
