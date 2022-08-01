import axios from 'axios';
import { getTopArtistsFetch } from '../fetch';

async function fetchTopArtists(limit: number, userID: string, period: string) {
  const response = await axios.get(
    getTopArtistsFetch +
      `&user=${userID}` +
      `&limit=${limit}` +
      `&period=${period}`
  );

  console.log(response.data.topartists);

  return response.data.topartists;
}

export default fetchTopArtists;
