type Action = { type: 'setDark' }
type Dispatch = (action: Action) => void

type IStateStorage = {
	[key: string]: number | string | JSON
}

type IStateLanguageDefinitions = {
	[key: string]: string
}

type IState = {
	theme: string,
	language: string,
	languageDefs: IStateLanguageDefinitions,
	storage: IStateStorage
}