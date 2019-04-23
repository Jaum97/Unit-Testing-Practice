import React, { useState } from 'react'

const App = () => {
	const [text, setText] = useState<string | undefined>('potato')

	return (
		<div className="App">
			<h1>{text}</h1>
			<button onClick={() => setText('banana')}>x</button>
		</div>
	)
}

export default App
