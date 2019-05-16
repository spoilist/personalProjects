import axios from "axios";

const endpoint = "https://api.spotify.com/v1/";

export function getArtistsList(searchedName, authToken, history) {
  return axios.get(`${endpoint}search?q=*${searchedName}*&type=artist`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
  .catch(error => {
    history.push("/");
  });
}

export function getArtistName(artistId, authToken, history) {
  return axios
    .get(`${endpoint}artists/${artistId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .catch(error => {
      history.push("/");
    });
}

export function getAlbumsList(artistId, authToken, history) {
  return axios
    .get(`${endpoint}artists/${artistId}/albums`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .catch(error => {
      history.push("/");
    });
}