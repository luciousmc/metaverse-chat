import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();

  return (
    <div className='relative h-48 w-48'>
      <Image
        onClick={() => logoutOnPress && logout()}
        src={`https://avatars.dicebear.com/api/pixel-art/${
          username || user.get('username')
        }.svg`}
        className='rounded-full bg-black cursor-pointer hover:opacity-75'
        layout='fill'
        objectFit='cover'
      />
    </div>
  );
}

export default Avatar;
