import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o7s0eq10fo01z7961c7zuw/master',
  cache: new InMemoryCache()
});