import axios from 'axios';
import { getTopAlbumsFetch } from '../fetch';

async function fetchTopAlbums(limit: number, userID: string, period: string) {
  const response = await axios.get(
    getTopAlbumsFetch +
      `&user=${userID}` +
      `&limit=${limit} + &period=${period}`
  );

  return response.data.topalbums;
}

export { fetchTopAlbums };
