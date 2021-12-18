import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import ChangeUser from './ChangeUser';

function Header() {
  const { user } = useMoralis();

  return (
    <div className='text-pink-500'>
      <div>
        <div className='relative w-24 h-24 hidden lg:inline-grid'>
          <Image
            className='rounded-full object-cover'
            src='https://links.papareact.com/3pi'
            layout='fill'
          />
        </div>

        <div>
          <Avatar logoutOnPress />

          <h1 className='text-3xl'>Metaverse Chat!</h1>
          <h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>

          <ChangeUser />
        </div>
      </div>
    </div>
  );
}

export default Header;
