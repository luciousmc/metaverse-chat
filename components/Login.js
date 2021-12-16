import Image from 'next/image';
import { useEffect, useRef } from 'react';

function Login() {
  const bgRef = useRef(null);
  const screenRef = useRef(null);

  const handleLoginClick = () => {
    bgRef.current.style.transform = 'scale(6)';
  };

  useEffect(() => {
    bgRef.current.addEventListener('transitionend', () => {
      console.log('transition ended');
      console.log('visiblity:', screenRef.current);
      screenRef.current.style.visibility = 'visible';
      // screenRef.current.style.transitionDelay = '2s';
      screenRef.current.style.transitionDuration = '1s';
      // screenRef.current.style.opacity = 1;
    });
  }, []);

  return (
    <>
      <div
        ref={screenRef}
        className='absolute invisible w-full h-full bg-white z-[100]'
      />
      <div className='bg-black relative overflow-hidden h-full'>
        <div className='flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4'>
          <Image
            className='object-cover rounded-full'
            src='https://links.papareact.com/3pi'
            height={200}
            width={200}
          />
          <button
            disabled={bgRef ? false : true}
            onClick={handleLoginClick}
            className='bg-yellow-500 rounded-lg p-5 font-bold animate-pulse'
          >
            Login to the Metaverse
          </button>
        </div>
        <div
          ref={bgRef}
          className='w-full h-full relative transition duration-500 ease-linear'
        >
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
    </>
  );
}

export default Login;
