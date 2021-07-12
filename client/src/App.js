import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client'

import GetProducts from './components/get-products/GetProducts';


const link = new HttpLink({
  uri: 'http://localhost:8080/graphql',
});


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link

});


function App() {
  return (
  <ApolloProvider client={client}>
    <GetProducts/>
  </ApolloProvider>
  )
}

export default App;
