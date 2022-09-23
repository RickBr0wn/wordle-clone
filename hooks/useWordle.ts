import { useState } from 'react'
import { _Guess } from '../types'

const useWordle = (solution: string) => {
	const [guess, setGuess] = useState<string>('')
	const [currentGuess, setCurrentGuess] = useState<string>('')
	const [guesses, setGuesses] = useState<_Guess[][]>([...Array(6)])
	const [isCorrect, setIsCorrect] = useState<boolean>(false)
	const [history, setHistory] = useState<string[]>([])
	const [turn, setTurn] = useState<number>(0)

	const formatGuess = () => {
		const solutionArray: Array<string | null> = [...solution]
		// format a guess into an array of letter objects
		// eg: { key: 'a', color: 'yellow' }
		const formattedGuess: _Guess[] = [...currentGuess].map((letter, index) => {
			return { key: letter, color: 'gray' }
		})

		// find the correct letters and change their color to green
		formattedGuess.forEach((letter, index) => {
			if (solutionArray[index] === letter.key) {
				formattedGuess[index].color = 'green'
				solutionArray[index] = null
			}
		})

		// find the correct letters which are in the wrong place and change their color to yellow
		formattedGuess.forEach((letter, index) => {
			if (solutionArray.includes(letter.key) && letter.color !== 'green') {
				formattedGuess[index].color = 'yellow'
				solutionArray[solutionArray.indexOf(letter.key)] = null
			}
		})

		// find the incorrect letters and change their color to red
		formattedGuess.forEach((letter, index) => {
			if (
				!solutionArray.includes(letter.key) &&
				letter.color !== 'green' &&
				letter.color !== 'yellow'
			) {
				formattedGuess[index].color = 'gray'
			}
		})

		return formattedGuess
	}

	// add a new guess to the guess state
	// update isCorrect if the guess is correct
	// add one to the turn state
	const addNewGuess = (formattedGuess: _Guess[]) => {
		// if (currentGuess === solution) {
		// 	setIsCorrect(true)
		// }

		setGuesses(prev => {
			let newGuesses = [...prev]
			newGuesses[turn] = formattedGuess
			return newGuesses
		})

		setHistory(prev => [...prev, currentGuess])

		setTurn(prev => prev + 1)

		setCurrentGuess('')
	}

	// handle the keyup event & track the current guess
	// detect when a user hits the enter key
	const handleKeyUp = ({ key }: { key: string }) => {
		if (key === 'Backspace') {
			return setCurrentGuess(prev => prev.slice(0, -1))
		}

		if (key === 'Enter') {
			// only add the guess if turn is less than 5
			// do not allow duplicate words
			// the word must be exactly 5 characters long
			if (turn > 5) {
				return console.log('you used all your guesses')
			}

			if (history.includes(currentGuess)) {
				return console.log('you already guessed that word')
			}

			if (currentGuess.length !== 5) {
				return console.log('word must be 5 characters long')
			}

			const formattedGuess = formatGuess()

			addNewGuess(formattedGuess)
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
