import type { GetServerSideProps, NextPage } from 'next'
import Wordle from '../components/Wordle'

interface _WordleProps {
	solution: string
}

export const getServerSideProps: GetServerSideProps<
	_WordleProps
> = async () => {
	const response = await fetch('https://daily-word-api.netlify.app')
	const { word } = await response.json()

	return {
		props: {
			solution: word
		}
	}
}

const Home: NextPage<_WordleProps> = ({ solution }) => {
	return (
		<main role='main'>
			<Wordle solution={solution} />
		</main>
	)
}

export default Home

// Language: typescript
// Path: pages/index.tsx
