import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { userAtom, loadingAtom } from 'utils/store';
import { useAtom } from 'jotai';
import Spinner from 'components/Spinner';
import { fetchTopAlbums, fetchTopArtists, fetchTopTracks } from 'utils/queries';
type Props = {};

function Loading({}: Props) {
  const [user] = useAtom(userAtom);
  const [loading, setLoading] = useAtom(loadingAtom);

  const [timeFilter, setTimeFilter] = useState({
    period: 'overall',
    name: 'all time',
  });

  const [limitFilter, setLimitFilter] = useState(5);
  const albumQuery = useQuery(['albums', timeFilter, limitFilter, user], () =>
    fetchTopAlbums(limitFilter, user, timeFilter?.period)
  );

  const artistQuery = useQuery(['artists', timeFilter, limitFilter, user], () =>
    fetchTopArtists(limitFilter, user, timeFilter?.period)
  );

  const trackQuery = useQuery(['tracks', timeFilter, limitFilter, user], () =>
    fetchTopTracks(limitFilter, user, timeFilter?.period)
  );

  if (
    !albumQuery.isLoading &&
    !artistQuery.isLoading &&
    !trackQuery.isLoading
  ) {
    setLoading(false);
  }
  return (
    <div className='flex flex-col items-center align-middle justify-center h-3/4'>
      <p className='text-purple-200 animate-pulse '>{`fetching ${user}'s scrobbles`}</p>
      <Spinner />
    </div>
  );
}

export default Loading;
