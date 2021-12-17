import Head from 'next/head';
import { useMoralis } from 'react-moralis';
import Login from '../components/Login';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className='h-screen'>
      <Head>
        <title>Metavese Challenge</title>
      </Head>

      <h1>User is Logged in</h1>

      <button
        className='bg-yellow-400 rounded-lg p-4 mt-5 font-bold'
        onClick={logout}
      >
        Logout!
      </button>
    </div>
  );
}
