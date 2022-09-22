import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Wordle from '../components/Wordle'

interface _WordleProps {
	word: string
}

export const getServerSideProps: GetServerSideProps<
	_WordleProps
> = async () => {
	const response = await fetch('https://daily-word-api.netlify.app')
	const { word } = await response.json()

	return {
		props: {
			word
		}
	}
}

const Home: NextPage<_WordleProps> = ({ word }) => {
	return (
		<main role='main'>
			<Wordle word={word} />
		</main>
	)
}

export default Home

// Language: typescript
// Path: pages/index.tsx
