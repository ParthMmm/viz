import { Fragment, useEffect, useState } from 'react';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchTopAlbums } from '../../utils/queries/fetchAlbums';
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
import { fetchTopArtists } from '../../utils/queries/fetchArtists';

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

  const { isLoading, isError, data, error } = useQuery(
    ['artists', timeFilter, limitFilter],
    () => fetchTopArtists(limitFilter, 'parth_m', timeFilter?.period)
  );

  if (isError) {
    return <div></div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
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
      <div className='flex flex-col w-full'>
        <Bar options={barOptions} data={dataSet} />{' '}
      </div>
    </>
  );
}

export default Artists;
