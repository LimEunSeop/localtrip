import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	
	${normalize}

	html {
		margin: 0;
		font-family: 'Spoqa Han Sans Neo', sans-serif;
	}

	body {
		margin: 0;
	}

	#root {
		font-size: 16px;
		font-weight: 300;
		min-height: calc(100vh);
	}
`

export default GlobalStyle
