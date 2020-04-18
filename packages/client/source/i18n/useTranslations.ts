import { useContext } from 'react'
import { EncoraContext } from '../context'

const useTranslations = () => {
	const [state, setState] = useContext(EncoraContext)

	const getLanguage = () => state.language
	const setLanguage = (language: string) => setState((prevState: IState) => ({ ...prevState, language }))

	return {
		i18n: {
			getLanguage,
			setLanguage
		}
	}
}

export { useTranslations }