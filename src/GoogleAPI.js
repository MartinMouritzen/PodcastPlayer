class GoogleAPI {
	/**
	* Search in KnowledgeGraph
	*/
	static async knowledgeGraphSearch(query) {
		const apiKey = 'AIzaSyAoi4303gO7PID7xCBLUnqL4Ubr9Rjs4l4';
		var searchUrl = 'https://kgsearch.googleapis.com/v1/entities:search?query=' + encodeURIComponent(query) + '&key=' + apiKey + '&limit=1&indent=True'

		var searchResponse = await fetch(searchUrl);
		return await searchResponse.json();
	}
}
export default GoogleAPI;