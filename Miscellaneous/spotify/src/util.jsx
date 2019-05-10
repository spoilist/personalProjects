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
	const query = window.location.hash.replace("#", "?");
	const params = new URLSearchParams(query);
	
	return (params.get('access_token'));
}