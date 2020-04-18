type Action = { type: 'setDark' }
type Dispatch = (action: Action) => void

type IStateStorage = {
	[key: string]: number | string | JSON
}

type IState = {
	theme: string,
	language: string,
	storage: IStateStorage
}