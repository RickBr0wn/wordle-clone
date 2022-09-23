import { Flex } from '@chakra-ui/react'
import { _WordleRowProps } from '../types'
import WordleLetter from './WordleLetter'

export function WordleRow({ guess, currentGuess }: _WordleRowProps) {
	if (guess) {
		return (
			<Flex
				textAlign={'center'}
				display={'flex'}
				justifyContent={'center'}
				gap={2}
			>
				{guess.map((letter, index) => {
					return <WordleLetter key={index} letter={letter} />
				})}
			</Flex>
		)
	}

	if (currentGuess) {
		const currentGuessLetters = currentGuess.split('')
		return (
			<Flex
				textAlign={'center'}
				display={'flex'}
				justifyContent={'center'}
				gap={2}
			>
				{currentGuessLetters.map((letter, index) => {
					return (
						<WordleLetter key={index} letter={{ key: letter, color: '' }} />
					)
				})}
				{[...Array(5 - currentGuessLetters.length)].map((_, index) => {
					return <WordleLetter key={index} letter={{ key: '', color: '' }} />
				})}
			</Flex>
		)
	}

	return (
		<Flex
			textAlign={'center'}
			display={'flex'}
			justifyContent={'center'}
			gap={2}
		>
			<WordleLetter letter={{ key: '', color: '' }} />
			<WordleLetter letter={{ key: '', color: '' }} />
			<WordleLetter letter={{ key: '', color: '' }} />
			<WordleLetter letter={{ key: '', color: '' }} />
			<WordleLetter letter={{ key: '', color: '' }} />
		</Flex>
	)
}
