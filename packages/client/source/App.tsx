import React from 'react'
import { EncoraProvider } from './context/Context'

import { ApolloProvider } from '@apollo/client'
import { GraphQLClient } from './graphql'

type IApp = {
	endpoint: string
}

export const App: React.FunctionComponent<IApp> = ({ endpoint, children }) => {
	return (
		<EncoraProvider>
			<ApolloProvider client={GraphQLClient(endpoint)}>
				{children}
			</ApolloProvider>
		</EncoraProvider>
	)
}