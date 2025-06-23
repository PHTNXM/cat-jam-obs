// Replace with your Spotify token (get one here: https://developer.spotify.com/console/get-users-currently-playing-track/)
const token = "YOUR_SPOTIFY_TOKEN";

window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new Spotify.Player({
        name: "Cat Jam OBS",
        getOAuthToken: cb => { cb(token); }
    });

    player.addListener('player_state_changed', state => {
        const bpm = state?.track_window?.current_track?.audio_features?.tempo;
        if (bpm) {
            const cat = document.getElementById("catjam");
            const baseBPM = 123;
            cat.style.animationDuration = `${60 / bpm}s`;
        }
    });

    player.connect();
};