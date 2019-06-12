import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './index.css';
import App from './components/app';
import store from './store/store';

const token = ""; //input token

const httpLink = {
    uri: 'https://api.github.com/graphql',
    headers: {
        authorization: `Bearer ${token}`
    }
};

const client = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache()
});

ReactDOM.render(
<ApolloProvider client={client}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ApolloProvider>,
  document.getElementById('root')
);