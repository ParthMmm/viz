import NewAlbums from './Albums/Albums';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import Sidebar from './Sidebar/Sidebar';
import { atom, useAtom } from 'jotai';
import { optionAtom } from '../utils/store';

import { PeriodFilter, LimitFilter } from './Filters/';
import Albums from './Albums/Albums';
import Artists from './Artists/Artists';
import Tracks from './Tracks/Tracks';
import UserInput from './UserInput';

type Props = {};

function Landing({}: Props) {
  const queryClient = useQueryClient();
  const [timeFilter, setTimeFilter] = useState({
    period: 'overall',
    name: 'all time',
  });

  const [limitFilter, setLimitFilter] = useState(5);

  const [option] = useAtom(optionAtom);

  console.log(option);

  const charts = () => {
    if (option === 'albums') {
      return <Albums timeFilter={timeFilter} limitFilter={limitFilter} />;
    }
    if (option === 'artists') {
      return <Artists timeFilter={timeFilter} limitFilter={limitFilter} />;
    }
    if (option === 'songs') {
      return <Tracks timeFilter={timeFilter} limitFilter={limitFilter} />;
    }
  };

  return (
    <div className='flex justify-center items-center text-white  w-screen h-screen '>
      <Sidebar />
      <div className='w-9/12 ml-10'>
        <div className='fixed w-[80%] top-0 mt-48'>
          <UserInput />
          <div className='flex flex-row'>
            {' '}
            <PeriodFilter
              timeFilter={timeFilter}
              setTimeFilter={setTimeFilter}
            />
            <LimitFilter
              limitFilter={limitFilter}
              setLimitFilter={setLimitFilter}
            />
          </div>
          {charts()}
        </div>
      </div>
    </div>
  );
}

export default Landing;

// const dataSet: {
//   labels: any;
//   datasets: {
//     label: {
//       name: string;
//     };
//     data: any;
//     borderColor: string;
//     backgroundColor: string;
//   }[];
// };

// const rawData: {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: any[];
//     borderColor: string;
//     backgroundColor: string;
//   }[];
// };
