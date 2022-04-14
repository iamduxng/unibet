import { ReactNode, ReactElement, useState } from 'react';
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import '@/styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient())

  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        { getLayout(<Component {...pageProps} />) }
      </Hydrate>
    </QueryClientProvider>
  )
};
