// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '@/styles/globals.css';
import { ReactNode } from 'react';
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import {ShoppingCartProvider} from "@/context/ShoppingCartContext";



// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }


export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const apolloClient = useApollo(pageProps)
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page : ReactNode) => page)

  return getLayout(
      <ApolloProvider client={apolloClient}>
        <ShoppingCartProvider>
          <Component {...pageProps} />
        </ShoppingCartProvider>
      </ApolloProvider>
  )
}