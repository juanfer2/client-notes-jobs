import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {env} from '../../contants/api.constant'

// 'http://localhost:4000/graphql'
// uri: env.apiUrlGraphql,
const httpLink = createHttpLink({
  uri: 'https://notes-jobs-production.up.railway.app/graphql',
});

const authLink: any = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

const Client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default Client
