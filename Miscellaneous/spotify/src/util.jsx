export function redirectUrlToSpotifyLogin() {
  const clientId = "1ae9d7e331e24b0b8413360563338962";
  const redirectUri = "http://localhost:3000/search";

  return (
    "https://accounts.spotify.com/authorize?client_id=" +
    clientId +
    "&redirect_uri=" +
    redirectUri +
    "&response_type=token"
  );
}

export function checkUrlForAccessToken() {
  return new URLSearchParams(window.location.hash.replace("#", "?")).get(
    "access_token"
  );
}

export function convertPopularity(popularity) {
  if (popularity > 80) {
    return 5;
  } else if (popularity > 60) {
    return 4;
  } else if (popularity > 40) {
    return 3;
  } else if (popularity > 20) {
    return 2;
  } else {
    return 1;
  }
}

export function formatFollowersNumber(numberOfFollowers) {
  return !numberOfFollowers ? 0 : numberOfFollowers.toLocaleString();
}

export function getArtistsNames(artists) {
  return artists.map(artist => artist.name).join(", ");
}

export function formatString(string) {
  return (string.length > 60) ? `${string.slice(0, 60)}...` : string;
}