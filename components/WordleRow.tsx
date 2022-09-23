import { Flex, Text, useColorMode } from '@chakra-ui/react'
import { _Guess } from './Wordle'

interface _WordleRowProps {
	guess: _Guess[]
}

export default function WordleRow({ guess }: _WordleRowProps) {
	const { colorMode } = useColorMode()

	return (
		<Flex justify={'center'} align={'center'} flexDir={'row'} gap={1}>
			{guess &&
				guess.map((letter: _Guess, index: number) => (
					<Flex
						bg={letter.color}
						color={'#333'}
						key={index}
						h={'60px'}
						w={'60px'}
						mb={2}
						justify={'center'}
						align={'center'}
						border={`1px solid ${colorMode === 'light' ? '#333' : '#fff'}`}
					>
						<Text fontSize={'2.5em'} fontWeight={'black'}>
							{letter.key.toUpperCase()}
						</Text>
					</Flex>
				))}
		</Flex>
	)
}
