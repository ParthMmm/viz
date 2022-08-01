const getTopArtistsFetch = `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&format=json${process.env.NEXT_PUBLIC_LAST_FM_KEY}`;
const getTopAlbumsFetch = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&format=json${process.env.NEXT_PUBLIC_LAST_FM_KEY}`;
const getTopSongsFetch = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&format=json${process.env.NEXT_PUBLIC_LAST_FM_KEY}`;

export { getTopArtistsFetch, getTopAlbumsFetch, getTopSongsFetch };
