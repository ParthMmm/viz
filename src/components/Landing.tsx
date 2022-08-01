import NewAlbums from './Albums/Albums';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchTopAlbums } from '../utils/queries/fetchAlbums';
import AlbumController from './Albums/AlbumController';
import ArtistsController from './Artists/ArtistsController';
import Sidebar from './Sidebar/Sidebar';
import { atom, useAtom } from 'jotai';
import { optionAtom } from '../utils/store';
import SongsController from './Tracks/SongsController';

import { PeriodFilter, LimitFilter } from './Filters/';
import Albums from './Albums/Albums';
import Artists from './Artists/Artists';
import Tracks from './Tracks/Tracks';

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
    <div className='flex justify-center items-center text-white  w-screen h-screen '>
      <Sidebar />
      <div className='flex flex-row w-9/12 ml-10'>
        <div className='w-full'>
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
