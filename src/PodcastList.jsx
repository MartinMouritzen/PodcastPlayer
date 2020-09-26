import React from 'react';

import { Link } from 'react-router-dom';

import LoadingIndicator from './resources/loading.svg';

function PodcastList({ podcasts }) {
	return (
		<div className="podcastList">
			{ podcasts === false &&
				<div className="loading">
					<div>
						Loading search results
					</div>

					<img src={LoadingIndicator} className="loadingIndicatorMedium" alt="Loading indicator" />
				</div>
			}
			{ podcasts !== false &&
				podcasts.items.map((podcast,index) => {
					return (
						<Link to={'/podcast/' + podcast.feedId} className="podcast" key={podcast.feedId}>
							<img src={podcast.image ? podcast.image : podcast.feedImage} alt={podcast.title + ' artwork'} />

							<div className="podcastListInfo">
								{podcast.title}
							</div>
						</Link>
					);
				})
			}
		</div>
	);
}
export default PodcastList;