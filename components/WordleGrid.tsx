import { Box, Flex, Text } from '@chakra-ui/react'
import { _Guess } from './Wordle'
import WordleRow from './WordleRow'

interface _WordleGridProps {
	currentGuess: string
	guesses: _Guess[][]
	turn: number
}

export default function WordleGrid({
	currentGuess,
	guesses,
	turn
}: _WordleGridProps) {
	return (
		<Flex flexDir={'column'} w={'100vw'}>
			<Flex align={'center'} flexDir={'column'}>
				{guesses &&
					guesses.map((guess, index) =>
						guess ? (
							<WordleRow key={index} guess={guess} />
						) : (
							<WordleRow
								key={index}
								guess={[
									{ key: '', color: 'transparent' },
									{ key: '', color: 'transparent' },
									{ key: '', color: 'transparent' },
									{ key: '', color: 'transparent' },
									{ key: '', color: 'transparent' }
								]}
							/>
						)
					)}
			</Flex>
		</Flex>
	)
}
