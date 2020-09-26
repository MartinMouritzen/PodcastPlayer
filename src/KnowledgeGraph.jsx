import React, { useEffect, useState } from 'react';

import GoogleAPI from './GoogleAPI.js';

function KnowledgeGraph(props) {
	let podcast = props.podcast;
	// DuckDuckGo: https://api.duckduckgo.com/?q=Someone%20knows%20something&format=json&pretty=1
	const [knowledgeGraphTitleResult, setknowledgeGraphTitleResult] = useState(false);

	// We have 2 queries for authors, because damnit, podcasts typically have 2 authors.
	const [knowledgeGraphAuthorResult, setknowledgeGraphAuthorResult] = useState(false);
	const [knowledgeGraphAuthor2Result, setknowledgeGraphAuthor2Result] = useState(false);
	
	useEffect(() => {
		GoogleAPI.knowledgeGraphSearch(podcast.feed.title)
		.then((result) => {
			setknowledgeGraphTitleResult(result);
		});

		var authors = podcast.feed.author.split('&');

		var author1 = authors[0].trim();
		GoogleAPI.knowledgeGraphSearch(author1)
		.then((result) => {
			setknowledgeGraphAuthorResult(result);
		});
		if (authors.length > 1) {
			var author2 = authors[1].trim();
			GoogleAPI.knowledgeGraphSearch(author2)
			.then((result) => {
				setknowledgeGraphAuthor2Result(result);
			});
		}
	},[podcast.feed.title,podcast.feed.author]);

	const renderKnowledgeGraphItem = (knowledgeGraphResult) => {
		var returnValue = false;
		var hasRealContent = false;
		if (knowledgeGraphResult !== false && knowledgeGraphResult.itemListElement && knowledgeGraphResult.itemListElement.length !== 0) {
			returnValue = knowledgeGraphResult.itemListElement.map(({ result }, index) => {
				if (knowledgeGraphResult.itemListElement[index].resultScore > 100) {
					hasRealContent = true;
					return (
						<div key={'knowledgeGraphItem' + index} className="knowledgeItem">
							<div className="title">
								{result.name}
							</div>
							{ result.detailedDescription.articleBody &&
								<div className="body">
									{result.detailedDescription.articleBody}
								</div>
							}
							{ result.image &&
								<div className="image">
									<img src={result.image.contentUrl} alt={'Image about: ' + result.name} />
								</div>
							}
						</div>
					);
				}
				else {
					console.log(knowledgeGraphResult.itemListElement[index]);
					return false;
				}
			})
		}
		return hasRealContent ? returnValue : false;
	}

	if (knowledgeGraphTitleResult !== false || knowledgeGraphAuthorResult !== false) {
		var titleContent = renderKnowledgeGraphItem(knowledgeGraphTitleResult);
		var authorContent = renderKnowledgeGraphItem(knowledgeGraphAuthorResult);
		var author2Content = renderKnowledgeGraphItem(knowledgeGraphAuthor2Result);

		console.log(titleContent);
		console.log(authorContent);
		console.log(author2Content);

		if (!titleContent && !authorContent && !author2Content) {
			return false;
		}
		return (
			<div className="knowledgeGraph">
				<div className="sideBarHeader">Knowledge from the web</div>
				<div className="knowledgeGraphContent">
					{ knowledgeGraphTitleResult !== false && knowledgeGraphTitleResult.itemListElement.length === 0 && knowledgeGraphAuthorResult !== false && knowledgeGraphAuthorResult.itemListElement.length === 0 &&
						<div>
							No results
						</div>
					}
					{ titleContent }
					{ authorContent }
					{ author2Content }
				</div>
			</div>
		);
	}
	else {
		return false;
	}
}
export default KnowledgeGraph;