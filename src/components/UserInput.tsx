import { userAtom } from '../utils/store';
import { useAtom } from 'jotai';

type Props = {};

function UserInput({}: Props) {
  const [user, setUser] = useAtom(userAtom);
  return (
    <div>
      <input
        onChange={(e) => setUser(e.target.value)}
        value={user}
        type='text'
        placeholder='last.fm username'
        className='flex  bg-gblack  cursor-default rounded-lg  font-semibold py-2 pl-3 md:pr-10 text-left border-none shadow-md sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-200'
      ></input>
    </div>
  );
}

export default UserInput;
