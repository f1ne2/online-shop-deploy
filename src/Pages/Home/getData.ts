import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

export async function query(strQuery: string) {
  const client = new ApolloClient({
    uri: 'https://online-shop-layout.herokuapp.com/',
    cache: new InMemoryCache()
  });
  return client
      .query({
        query: gql(strQuery)
      });
}
