const getTopArtistsFetch = `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&format=json${process.env.NEXT_PUBLIC_LAST_FM_KEY}`;
const getTopAlbumsFetch = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&format=json${process.env.NEXT_PUBLIC_LAST_FM_KEY}`;

export { getTopArtistsFetch, getTopAlbumsFetch };
