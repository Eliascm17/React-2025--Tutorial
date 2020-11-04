import SpotifyWebApi from 'spotify-web-api-node';

const spotify = new SpotifyWebApi({
    clientId: env.process.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    clientSecret: env.process.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
    redirectUri: `https://${process.env.NEXT_PUBLIC_PROJECT}.firebaseapp.com`
});

export default spotify;
