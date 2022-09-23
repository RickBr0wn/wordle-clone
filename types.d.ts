export interface _WordleLetterProps {
	letter: _Guess
}

export interface _WordleRowProps {
	guess?: _Guess[]
	currentGuess?: string
}

export interface _WordleGridProps {
	currentGuess: string
	guesses: _Guess[][]
	turn: number
}

export interface _Guess {
	key: string
	color: string
}

export interface _UseWordle {
	currentGuess: string
	guesses: any[]
	isCorrect: boolean
	turn: number
	handleKeyUp: ({ key }: { key: string }) => void
}
