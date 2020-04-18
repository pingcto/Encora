import { useContext } from 'react'
import { EncoraContext } from '../context'

const useStorage = () => {
	const [state, setState] = useContext(EncoraContext)

	const getItem = (key: string) => {
		
	}

	const setItem = (theme: string) => {
		setState((prevState: IState) => ({
			...prevState, 
			theme
		}))
	}

	return {
		getItem,
		setItem
	}
}

export { useStorage }