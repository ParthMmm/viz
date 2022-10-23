import NewAlbums from '../Albums/Albums';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import { atom, useAtom } from 'jotai';
import { optionAtom } from '../../utils/store';

import { PeriodFilter, LimitFilter } from '../Filters';
import Albums from '../Albums/Albums';
import Artists from '../Artists/Artists';
import Tracks from '../Tracks/Tracks';
import UserInput from '../UserInput';
import Header from '../Navbar';
import Navbar from '../Navbar';

type Props = {};

function Landing({}: Props) {
  const queryClient = useQueryClient();
  const [timeFilter, setTimeFilter] = useState({
    period: 'overall',
    name: 'all time',
  });

  const [limitFilter, setLimitFilter] = useState(5);

  const [option] = useAtom(optionAtom);

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
    <div>
      <Navbar />
      <div className='flex justify-center items-center align-middle text-white w-full '>
        <div className=' w-[95%] md:w-3/4 top-0 mt-12 '>
          <div className='flex flex-row items-center justify-start  align-middle'>
            <UserInput />
            <Sidebar />
          </div>

          <div className='flex  md:flex-row mb-4 '>
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
