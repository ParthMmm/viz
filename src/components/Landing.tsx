import Albums from './Albums';

type Props = {};

function Landing({}: Props) {
  return (
    <div className='flex justify-center items-center text-white mt-32 w-full '>
      <div className='flex flex-row w-4/5'>
        <Albums />
      </div>
    </div>
  );
}

export default Landing;
