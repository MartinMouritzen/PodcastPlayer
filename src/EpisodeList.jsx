import React, { useEffect, useRef } from 'react';


function EpisodeList({ playEpisode, episodes }) {
	const stripTags = (content) => {
		return content.replace(/<[^>]*>?/gm, '');
	}

	return (
		<>
			<div className="episodesHeader">
				Episodes
			</div>
			{ episodes.items.map((episode,index) => {
				var date = new Date(episode.datePublished * 1000);
				return (
					<div key={episode.id} className="episode">
						<div className="playIcon" onClick={() => { playEpisode(episode); }}>▶</div>
						<div className="episodeInfo">
							<div className="title">{episode.title} <span>{date.toLocaleDateString("en-US")}</span></div>
							<div className="description">{stripTags(episode.description)}</div>
						</div>
					</div>
				);
			}) }
		</>
	);
}
export default EpisodeList;