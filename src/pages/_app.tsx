import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'jotai';
import Layout from 'components/Layout';
import { Suspense } from 'react';

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </Suspense>
  );
};

export default MyApp;
