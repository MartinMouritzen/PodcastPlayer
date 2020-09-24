import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';

import LoadingIndicator from './resources/loading.svg';

function PodcastList({ podcasts }) {
	return (
		<div className="podcastList">
			{ podcasts === false &&
				<div class="loading">
					<div>
						Loading search results
					</div>

					<img src={LoadingIndicator} class="loadingIndicatorMedium" alt="Loading indicator" />
				</div>
			}
			{ podcasts !== false &&
				podcasts.items.map((podcast,index) => {
					return (
						<Link to={'/podcast/' + podcast.feedId} class="podcast">
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