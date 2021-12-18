import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import PropTypes from 'prop-types';

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();

  return (
    <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>
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

Avatar.propTypes = {
  username: PropTypes.object,
  logOutOnPress: PropTypes.bool,
};
