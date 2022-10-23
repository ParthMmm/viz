import { Fragment, useEffect, useState } from 'react';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchTopAlbums } from '../../utils/queries';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Chart } from 'react-chartjs-2';
import { AlbumFilterProps } from '../../utils/types';
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

type Album = {
  name: string;
  artist: string;
  image: string;
  url: string;
  playcount: string;
};

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
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Top Album Playcount',
      font: {
        size: 24,
        weight: '800',
      },
      color: '#fff',
    },
  },
  scales: {
    yAxes: {
      ticks: {
        color: '#fff',
      },
    },
    xAxes: {
      ticks: {
        color: '#fff',
      },
      grid: {
        display: true,
        zeroLineColor: 'transparent',
      },
    },
  },
};

function Albums({ timeFilter, limitFilter }: AlbumFilterProps) {
  const queryClient = useQueryClient();
  const [user] = useAtom(userAtom);

  const { isLoading, isError, data, error } = useQuery(
    ['albums', timeFilter, limitFilter, user],
    () => fetchTopAlbums(limitFilter, user, timeFilter?.period)
  );

  if (isError) {
    return <div className='flex flex-col w-full'></div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  let labels: string[] = data.album.map((album: Album) => {
    console.log(album);
    return album.name;
  });

  let playcounts: string[] = data.album.map((album: Album) => {
    return parseInt(album.playcount);
  });

  const dataSet = {
    labels,
    datasets: [
      {
        label: `${timeFilter.name}`,
        data: playcounts,
        borderColor: '#fff',
        backgroundColor: '#ffff',
      },
    ],
  };

  return (
    <>
      <div className='flex flex-col  '>
        <Bar options={barOptions} data={dataSet} />{' '}
      </div>
    </>
  );
}

export default Albums;
