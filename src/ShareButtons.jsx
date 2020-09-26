import React from 'react';

import ShareF from './resources/share-f.jpg';
import ShareT from './resources/share-t.jpg';

function ShareButtons({ podcastTitle, podcastId }) {
	const shareTitle = 'Check out this podcast: ' + podcastTitle;
	const shareTitleEncoded = encodeURI(shareTitle);
	const shareURL = encodeURI('https://www.podfriend.com/simpleplayer/test/') + '#' + encodeURI('/podcast/') + podcastId;
	const shareURLEncoded = encodeURI('https://www.podfriend.com/simpleplayer/test/') + '%23' + encodeURI('/podcast/') + podcastId;

	const copyToClipBoard = () => {
		var dummy = document.createElement("textarea");
		document.body.appendChild(dummy);
		dummy.value = shareTitle + ': ' + shareURL;
		dummy.select();
		document.execCommand("copy");
		document.body.removeChild(dummy);
	};

	return (
		<div className="shareButtons">
			<a href={'https://www.facebook.com/sharer/sharer.php?u=' + shareURLEncoded + '&p[title]=' + shareTitleEncoded + '&display=popup'}>
				<img src={ShareF} width="100" height="30" alt="Share on Facebook" /></a>
			&nbsp;
			<a href={'https://twitter.com/intent/tweet?text=' + shareTitleEncoded + '&url=' + shareURLEncoded}>
			<img src={ShareT} width="100" height="30" alt="Share on Twitter" /></a>
			&nbsp;
			<div className="clipBoardButton" onClick={copyToClipBoard}>
				Copy to clipboard
			</div>
		</div>
	);
}
export default ShareButtons;