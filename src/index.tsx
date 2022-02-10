import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { BrowserRouter } from "react-router-dom";
import App from "pages/App";

import { FilterProvider } from "context/filter";
import { HomesProvider } from "context/homes";

import "index.css";

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <FilterProvider>
          <HomesProvider>
            <App />
          </HomesProvider>
        </FilterProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
