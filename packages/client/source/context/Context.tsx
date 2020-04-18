import React, { useState } from 'react'

const initialState: IState = {
	theme: 'default',
	language: 'en',
	languageDefs: {},
	storage: {}
}

const EncoraContext = React.createContext<any | undefined>(undefined)

function EncoraProvider({ children }: { children: React.ReactElement | React.ReactElement[] }) {
	const [state, setState] = useState<IState>(initialState)
	
	return <EncoraContext.Provider value={[state, setState]}>{children}</EncoraContext.Provider>
}

export { EncoraContext, EncoraProvider }