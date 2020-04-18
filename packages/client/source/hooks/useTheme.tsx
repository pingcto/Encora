import { useContext } from 'react'
import { EncoraContext } from '../context'

const useTheme = () => {
	const [state, setState] = useContext(EncoraContext)

	const updateTheme = (theme: string) => {
		setState((prevState: IState) => ({
			...prevState, 
			theme
		}))
	}

	return {
		theme: state.theme,
		updateTheme
	}
}

export { useTheme }