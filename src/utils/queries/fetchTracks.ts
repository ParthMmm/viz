import axios from 'axios';
import { getTopSongsFetch } from '../fetch';

async function fetchTopTracks(limit: number, userID: string, period: string) {
  const response = await axios.get(
    getTopSongsFetch +
      `&user=${userID}` +
      `&limit=${limit}` +
      `&period=${period}`
  );

  console.log(response.data.toptracks);

  return response.data.toptracks;
}

export default fetchTopTracks;
