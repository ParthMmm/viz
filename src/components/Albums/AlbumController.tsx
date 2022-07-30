import { useState } from 'react';
import Albums from './Albums';
import Filter from '../Filter';

type Props = {};

function AlbumController({}: Props) {
  const [timeFilter, setTimeFilter] = useState({
    period: 'overall',
    name: 'all time',
  });

  return (
    <div className='w-full'>
      <Filter timeFilter={timeFilter} setTimeFilter={setTimeFilter} />
      <Albums timeFilter={timeFilter} />
    </div>
  );
}

export default AlbumController;
