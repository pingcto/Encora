import { useContext } from 'react'
import { EncoraContext } from '../context'

const useStorage = () => {
	const [state, setState] = useContext(EncoraContext)

	const getItem = (key: string) => state.storage[key]

	const setItem = (key: string, value: any) => {
		setState((prevState: IState) => {
			const storage: IStateStorage = { ...prevState.storage }
			storage[key] = value
			return {
				...prevState,
				storage
			}
		})
	}

	return {
		getItem,
		setItem
	}
}

export { useStorage }