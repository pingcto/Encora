type Action = { type: 'setDark' }
type Dispatch = (action: Action) => void

type IState = {
	theme: string,
	language: string,
	storage: object
}