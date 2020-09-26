import React, { useEffect, useRef } from 'react';


function Player(props) {
	const audioElement = useRef(null);

	useEffect(() => {
		audioElement.current.pause();
		audioElement.current.load();
		audioElement.current.play();
	},[props.playingEpisode]);

	return (
		<div className="player">
			<img src={props.playingEpisode.feedImage} alt={props.playingEpisode.title + ' thumbnail'} />
			<div className="podcastInfo">
			<div className="title">
					{props.playingEpisode.title}
				</div>
			</div>
			<div className="playerControls">
				<audio controls ref={audioElement}>
				<source src={props.playingEpisode.enclosureUrl} type={props.playingEpisode.enclosureType} />
					Your browser does not support the audio element.
				</audio>
			</div>
		</div>
	);
}
export default Player;