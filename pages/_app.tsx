import "../styles/globals.css";
import type { AppProps } from "next/app";

import { MantineProvider } from "@mantine/core";

import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";

import Page from "../components/Page";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: "light" }}
      >
        <Page>
          <Component {...pageProps} />
        </Page>
      </MantineProvider>
    </ApolloProvider>
  );
}

export default MyApp;
