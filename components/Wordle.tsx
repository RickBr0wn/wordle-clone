export default function Wordle({ word }: { word: string }) {
	console.log('word: ', word)

	return (
		<div className='wordle'>
			<h1>Wordle</h1>
			<h1>Today&apos;s solution: {word}</h1>
		</div>
	)
}

// Language: typescript
