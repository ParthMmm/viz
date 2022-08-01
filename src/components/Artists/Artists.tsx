import { Fragment, useEffect, useState } from 'react';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { AlbumFilterProps } from '../../utils/types';
import { fetchTopArtists } from '../../utils/queries';
import { userAtom } from '../../utils/store';
import { useAtom } from 'jotai';
import Spinner from '../Spinner';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const barOptions = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Top Artists Playcount',
    },
  },
};

function Artists({ timeFilter, limitFilter }: AlbumFilterProps) {
  const queryClient = useQueryClient();
  const [user] = useAtom(userAtom);

  const { isLoading, isError, data, error } = useQuery(
    ['artists', timeFilter, limitFilter, user],
    () => fetchTopArtists(limitFilter, user, timeFilter?.period)
  );

  if (isError) {
    return <div className='flex flex-col w-full'></div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  let labels: string[] = data.artist.map(
    (artist: { name: any; playcount: any }) => {
      return artist.name;
    }
  );

  let playcounts: string[] = data.artist.map(
    (artist: { name: any; playcount: any }) => {
      return parseInt(artist.playcount);
    }
  );

  const dataSet = {
    labels,
    datasets: [
      {
        label: timeFilter.name,
        data: playcounts,
        borderColor: '#d1baf1',
        backgroundColor: '#d1baf1',
      },
    ],
  };

  return (
    <>
      <div className='flex flex-col w-3/4'>
        <Bar options={barOptions} data={dataSet} />{' '}
      </div>
    </>
  );
}

export default Artists;
