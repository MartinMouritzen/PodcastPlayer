const searchHost = 'https://api.podcastindex.org/api/1.0/';
const authUrl = 'https://www.podfriend.com/simpleplayer/apigenerator.php';

class PodcastService {
	/**
	* Get auth headers from server (to hide our api secret)
	*/
	static async getAuthHeaders() {
		var authResponse = await fetch(authUrl);
		let authInfo = await authResponse.json();
		return {
			'User-Agent': 'Podfriend Simple 1.0',
			'X-Auth-Date': authInfo.authDate,
			'X-Auth-Key': authInfo.authKey,
			'Authorization': authInfo.authString
		};
	}
	/**
	* Search for a podcast
	*/
	static async search(query) {
		var authHeaders = await this.getAuthHeaders();

		var searchUrl = searchHost + 'search/byterm?q=' + encodeURIComponent(query);

		var searchResponse = await fetch(searchUrl,{
			headers: authHeaders
		});
		return await searchResponse.json();
	}
	/**
	* Search for a podcast
	*/
	static async retrieveLastUpdatedPodcasts() {
		var authHeaders = await this.getAuthHeaders();

		var latestUrl = searchHost + 'recent/episodes';

		var latestResponse = await fetch(latestUrl,{
			headers: authHeaders
		});
		return await latestResponse.json();
	}
	/**
	* Look up info about a podcast
	*/
	static async lookUp(podcastId) {
		var authHeaders = await this.getAuthHeaders();

		var lookUpUrl = searchHost + 'podcasts/byfeedid?id=' + encodeURIComponent(podcastId);

		var podcastInfoResponse = await fetch(lookUpUrl,{
			headers: authHeaders
		});
		return await podcastInfoResponse.json();
	}
	/**
	* 
	*/
	static async retrieveEpisodes(podcastId) {
		var authHeaders = await this.getAuthHeaders();

		var lookUpUrl = searchHost + 'episodes/byfeedid?id=' + encodeURIComponent(podcastId);

		var EpisodeInfoResponse = await fetch(lookUpUrl,{
			headers: authHeaders
		});
		return await EpisodeInfoResponse.json();
	}
}
export default PodcastService;