import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Head from 'next/head';
import { useEffect } from 'react';

function Login() {
  const { authenticate, logout } = useMoralis();

  useEffect(() => {
    document.title = 'Enter the Metaverse!';
  }, []);

  return (
    <div className='bg-black relative overflow-hidden h-screen'>
      <div className='flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4'>
        {/* <Image
          className='object-cover rounded-full'
          src='https://links.papareact.com/3pi'
          height={200}
          width={200}
        /> */}

        <div className='loginTitle'>
          <h1>Enter</h1>
          <p>the</p>
          <p>Metaverse</p>
        </div>

        <button
          onClick={authenticate}
          className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'
        >
          Login to the Metaverse
        </button>
      </div>
      <div className='w-full h-full relative transition duration-500 ease-linear'>
        <Image
          className=''
          // src='https://links.papareact.com/55n'
          src='/hallway-bg.jpg'
          objectFit='cover'
          layout='fill'
          alt='Futuristic Background'
        />
      </div>
    </div>
  );
}

export default Login;
