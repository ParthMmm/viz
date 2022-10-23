import type { NextPage } from 'next';
import Head from 'next/head';

import Main from 'components/Main';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>viz</title>
        <meta name='description' content='viz' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='fixed bg-black transition-all duration-700 ease-in-out  h-screen z-[10] w-screen'>
          <Main />
        </div>
      </main>
    </>
  );
};

export default Home;
