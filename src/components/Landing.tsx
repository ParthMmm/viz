import NewAlbums from './Albums/Albums';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchTopAlbums } from '../utils/queries/fetchAlbums';
import AlbumController from './Albums/AlbumController';
import ArtistsController from './Artists/ArtistsController';
import Sidebar from './Sidebar/Sidebar';
import { atom, useAtom } from 'jotai';
import { optionAtom } from '../utils/store';
import SongsController from './Songs/SongsController';
type Props = {};

function Landing({}: Props) {
  const queryClient = useQueryClient();

  const [option] = useAtom(optionAtom);

  const charts = () => {
    if (option === 'albums') {
      return <AlbumController />;
    }
    if (option === 'artists') {
      return <ArtistsController />;
    }
    if (option === 'songs') {
      return <SongsController />;
    }
  };

  return (
    <div className='flex justify-center items-center text-white  w-screen h-screen '>
      <Sidebar />
      <div className='flex flex-row w-9/12 ml-10'>{charts()}</div>
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
