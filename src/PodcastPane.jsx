import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import LoadingIndicator from './resources/loading.svg';

import PodcastService from './PodcastService';
import EpisodeList from './EpisodeList';

function PodcastPane(props) {
	let { podcastId } = useParams();

	const [podcastInfo, setPodcastInfo] = useState(false);
	const [episodes, setEpisodes] = useState(false);

	useEffect(() => {
		setPodcastInfo(false);
		PodcastService.lookUp(podcastId)
		.then((podcastInfo) => {
			setPodcastInfo(podcastInfo);
		});

		PodcastService.retrieveEpisodes(podcastId)
		.then((episodes) => {
			setEpisodes(episodes);
		});
	},[podcastId]);

	return (
		<div className="podcast">
			{ podcastInfo === false &&
				<div className="loading">
					<div>
						Loading podcast
					</div>

					<img src={LoadingIndicator} className="loadingIndicator" alt="Loading indicator" />
				</div>
			}
			{ podcastInfo !== false &&
				<div className="podcastInfo">
					<img src={podcastInfo.feed.artwork} alt={podcastInfo.feed.title + ' artwork'} />
					<div className="podcastCoreInfo">
						<h1>{podcastInfo.feed.title}</h1>
						<h2>{podcastInfo.feed.author}</h2>
						<p>{podcastInfo.feed.description}</p>
					</div>
				</div>
			}

			{ episodes !== false &&
				<EpisodeList playEpisode={props.playEpisode} episodes={episodes} />
			}
		</div>
	);
}
export default PodcastPane;