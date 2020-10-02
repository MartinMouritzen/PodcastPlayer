import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import LoadingIndicator from './resources/loading.svg';

import PodcastService from './PodcastService';
import KnowledgeGraph from './KnowledgeGraph';
import EpisodeList from './EpisodeList';
import ShareButtons from './ShareButtons';

function PodcastPane(props) {
	let { podcastId } = useParams();

	const [podcastInfo, setPodcastInfo] = useState(false);
	const [episodes, setEpisodes] = useState(false);

	useEffect(() => {
		setPodcastInfo(false);
		PodcastService.lookUp(podcastId)
		.then((podcastInfo) => {
			window.document.title = podcastInfo.feed.title + ' - Podfriend light';
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
				<>
					<div className="podcastInner">
						<div className="podcastInfo">
							<img src={podcastInfo.feed.artwork ? podcastInfo.feed.artwork : podcastInfo.feed.image} alt={podcastInfo.feed.title + ' artwork'} className="cover" />
							<div className="podcastCoreInfo">
								<h1>{podcastInfo.feed.title}</h1>
								<h2>{podcastInfo.feed.author}</h2>
								<p>{podcastInfo.feed.description}</p>
								<ShareButtons podcastTitle={podcastInfo.feed.title} podcastId={podcastId} />
							</div>
						</div>
						<div className="podcastContent">
							{ episodes !== false &&
								<EpisodeList playEpisode={props.playEpisode} episodes={episodes} />
							}
						</div>
					</div>
					{ podcastInfo !== false &&
						<KnowledgeGraph podcast={podcastInfo} />
					}
				</>
			}
		</div>
	);
}
export default PodcastPane;