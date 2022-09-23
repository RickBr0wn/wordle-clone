import { Flex, useColorMode } from '@chakra-ui/react'
import { _WordleLetterProps } from '../types'

const WordleLetter = ({ letter }: _WordleLetterProps) => {
	const { colorMode } = useColorMode()
	return (
		<Flex
			w='50px'
			h='50px'
			justifyContent='center'
			alignItems='center'
			bg={letter.color}
			mb={2}
			border={colorMode === 'light' ? '1px solid black' : '1px solid white'}
			fontWeight={'black'}
			fontSize={'2xl'}
		>
			{letter.key.toUpperCase()}
		</Flex>
	)
}

export default WordleLetter
