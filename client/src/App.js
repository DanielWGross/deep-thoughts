import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import React from "react";

const client = new ApolloClient({
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
