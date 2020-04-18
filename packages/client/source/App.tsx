import React from 'react'
import { EncoraProvider } from './context/Context'

import { ApolloProvider } from '@apollo/client'
import { client } from './graphql'

type IApp = {
	endpoint: string
}

export const App: React.FunctionComponent<IApp> = ({ endpoint, children }) => {
	return (
		<EncoraProvider>
			<ApolloProvider client={client(endpoint)}>
				{children}
			</ApolloProvider>
		</EncoraProvider>
	)
}