import Button from './Button';
type Props = {};

const buttons = ['albums', 'artists', 'songs'];

function Sidebar({}: Props) {
  return (
    <div className=' w-3/4 flex items-center justify-center  '>
      <div className='flex flex-row items-center justify-center w-full font-bold  '>
        {buttons.map((button) => (
          <Button name={button} key={button}></Button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
