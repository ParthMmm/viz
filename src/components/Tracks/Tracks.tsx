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
import { fetchTopTracks } from '../../utils/queries/';

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
      text: 'Top Tracks Playcount',
    },
  },
};

function Tracks({ timeFilter, limitFilter }: AlbumFilterProps) {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    ['tracks', timeFilter, limitFilter],
    () => fetchTopTracks(limitFilter, 'parth_m', timeFilter?.period)
  );

  if (isError) {
    return <div></div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let labels: string[] = data.track.map(
    (track: { name: any; playcount: any }) => {
      return track.name;
    }
  );

  let playcounts: string[] = data.track.map(
    (track: { name: any; playcount: any }) => {
      return parseInt(track.playcount);
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
      <div className='flex flex-col w-full'>
        <Bar options={barOptions} data={dataSet} />{' '}
      </div>
    </>
  );
}

export default Tracks;
