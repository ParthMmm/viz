import { animated } from 'react-spring';

import useBoop from '../../utils/hooks/useBoop.js';

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
type Props = { name: string };

function Button({ name }: Props) {
  const [style, setIsBooped] = useBoop(boopConfig);

  return (
    <>
      <button className=' hover:bg-[#e3cfff] w-full h-12  hover:text-black text-md  '>
        <animated.div
          onMouseEnter={() => setIsBooped(true)}
          onMouseLeave={() => setIsBooped(false)}
          style={style}
          // onMouseEnter={trigger}
          // style={style}
        >
          <span className=''>{name}</span>
        </animated.div>
      </button>
    </>
  );
}

export default Button;
