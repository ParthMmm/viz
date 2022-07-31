import Button from './Button';
type Props = {};

const buttons = ['albums', 'artists', 'songs'];

function Sidebar({}: Props) {
  return (
    <div className='bg-[#fcfcfc] dark:bg-[#2c2d2f] w-3/12 h-5/6 flex items-center justify-center border-r-[1px] '>
      <div className='flex flex-col items-center justify-center w-full font-bold  '>
        {buttons.map((button) => (
          <Button name={button} key={button}></Button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
