import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';

function Header() {
  const { user } = useMoralis();

  return (
    <div>
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

          {/* Welcom Message */}

          {/* Change Username */}
        </div>
      </div>
    </div>
  );
}

export default Header;
