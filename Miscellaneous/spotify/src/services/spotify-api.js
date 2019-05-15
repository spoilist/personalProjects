import axios from "axios";

export function getArtistsList(searchedName, authToken, history) {
  const endpoint = "https://api.spotify.com/v1/search?";
  const query = "q=*" + searchedName + "*&type=artist"; 
  return axios.get(endpoint + query, {
    headers: {
      "Authorization": `Bearer ${authToken}`
    },
  })
  .catch(error => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          alert("Error 400: Bad Request");
          break;
        case 403:
          alert("Error 403: Forbidden");
          break;
        case 404:
          alert("Error 404: Not Found");
          break;
        case 429:
          alert("Error 429: Too Many Requests");
          break;
        case 500:
          alert("Error 500: Internal Server Error");
          break;
        case 502:
          alert("Bad Gateway");
          break;
        case 503:
          alert("Error 503: Service unavailable");
          break;
        default:
          history.push("/");
          break;
      }
    } else {
      history.push("/");
    }
  });
}

export function getArtistName(artistId, authToken, history) {
  const endpoint = "https://api.spotify.com/v1/artists/";
  return axios
    .get(endpoint + artistId, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .catch(error => {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            alert("Error 400: Bad Request");
            break;
          case 403:
            alert("Error 403: Forbidden");
            break;
          case 404:
            alert("Error 404: Not Found");
            break;
          case 429:
            alert("Error 429: Too Many Requests");
            break;
          case 500:
            alert("Error 500: Internal Server Error");
            break;
          case 502:
            alert("Bad Gateway");
            break;
          case 503:
            alert("Error 503: Service unavailable");
            break;
          default:
            history.push("/");
            break;
        }
      } else {
        history.push("/");
      }
    });
}

export function getAlbumsList(artistId, authToken, history) {
  const endpoint = "https://api.spotify.com/v1/artists/";
  return axios
    .get(endpoint + `${artistId}/albums`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    .catch(error => {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            alert("Error 400: Bad Request");
            break;
          case 403:
            alert("Error 403: Forbidden");
            break;
          case 404:
            alert("Error 404: Not Found");
            break;
          case 429:
            alert("Error 429: Too Many Requests");
            break;
          case 500:
            alert("Error 500: Internal Server Error");
            break;
          case 502:
            alert("Bad Gateway");
            break;
          case 503:
            alert("Error 503: Service unavailable");
            break;
          default:
            history.push("/");
            break;
        }
      } else {
          history.push("/");
      }
    });
}