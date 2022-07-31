import NewAlbums from './Albums/Albums';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchTopAlbums } from '../utils/queries/fetchAlbums';
import AlbumController from './Albums/AlbumController';
import Sidebar from './Sidebar/Sidebar';

type Props = {};

function Landing({}: Props) {
  const queryClient = useQueryClient();

  const [timeFilter, setTimeFilter] = useState({
    period: 'overall',
    name: 'all time',
  });
  const { isLoading, isError, data, error } = useQuery(
    ['albums', timeFilter],
    () => fetchTopAlbums(5, 'parth_m', timeFilter?.period)
  );

  if (isError) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='flex justify-center items-center text-white  w-screen h-screen '>
      <Sidebar />
      <div className='flex flex-row w-9/12 ml-10'>
        {/* <Albums /> */}
        <AlbumController />
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
