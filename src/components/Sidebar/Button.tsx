import { animated } from 'react-spring';
import { atom, useAtom } from 'jotai';
import useBoop from '../../utils/hooks/useBoop.js';
import { optionAtom } from '../../utils/store';

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

  const [option, setOption] = useAtom(optionAtom);
  // console.log(option);

  const handleClick = () => {
    setOption(name);
  };

  return (
    <>
      <button
        className=' hover:bg-[#e3cfff] w-full h-12  hover:text-black text-md  '
        onClick={() => handleClick()}
      >
        <animated.div
          onMouseEnter={() => setIsBooped(true)}
          onMouseLeave={() => setIsBooped(false)}
          style={style}
        >
          <span className=''>{name}</span>
        </animated.div>
      </button>
    </>
  );
}

export default Button;
