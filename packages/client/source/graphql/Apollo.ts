import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const client = (uri: string) => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri
		})
	})
}