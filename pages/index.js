import Head from 'next/head';
import { useMoralis } from 'react-moralis';
import Header from '../components/Header';
import Login from '../components/Login';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className='h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden'>
      <Head>
        <title>Metavese Challenge</title>
      </Head>

      <div className='max-w-screen-2xl mx-auto'>
        {/* Header */}
        <Header />

        {/* Chat */}

        <button
          className='bg-yellow-400 rounded-lg p-4 mt-5 font-bold'
          onClick={logout}
        >
          Logout!
        </button>
      </div>
    </div>
  );
}
