import { userAtom, introAtom, loadingAtom } from '../../utils/store';
import { useAtom } from 'jotai';
import Router from 'next/router';
import { KeyboardEvent } from 'react';
import useBoop from 'utils/hooks/useBoop';

const boopConfig = {
  x: 0,
  y: 0,
  rotation: 0,
  scale: 1.2,
  timing: 150,
  springConfig: {
    tension: 300,
    friction: 15,
  },
};

type Props = {};

function Intro({}: Props) {
  const [user, setUser] = useAtom(userAtom);
  const [intro, setIntro] = useAtom(introAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [style, setIsBooped] = useBoop(boopConfig);

  const handleClick = () => {
    setIntro(false);
    setLoading(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log('User pressed: ', event.key);

    // console.log(message);

    if (event.key === 'Enter') {
      setIntro(false);
      setLoading(true);
    }
  };

  return (
    <div className='flex flex-col  justify-center items-center align-middle h-3/4'>
      <h1 className='font-bold text-4xl text-purple-400'>viz</h1>
      <p className='text-purple-200 mt-4'>visualize your last.fm scrobbles</p>
      <input
        onChange={(e) => setUser(e.target.value)}
        onKeyDown={(event) => handleKeyDown(event)}
        value={user}
        type='text'
        placeholder='last.fm username'
        className='relative mt-8 bg-gblack  cursor-default rounded-lg text-purple-200 py-2 pl-3 pr-10 text-left border-none shadow-md sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-200'
      />
      <button className='mt-12' onClick={() => handleClick()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='white'
        >
          <path
            fillRule='evenodd'
            d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
}

export default Intro;
