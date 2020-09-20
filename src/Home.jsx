import React from 'react';


function Home(props) {
	return (
		<div className="home">
			<h1>Welcome to a very very simple podcast player!</h1>
			<p>
				While working on my, soon to be released (and much more feature heavy) Podcast App Podfriend, I discovered podcastindex.org.
			</p>
			<p>
				Now instead of scraping, aggregating and whatever, I could focus a lot more on the app itself. Such a wonderful idea, and it will save a lot of headaches and time!
			</p>
			<p>
				In the latest podcast it was mentioned that no one made a HTML5 player yet, so I thought I'd give a little bit back to the community and make a super simple one (in React), that everyone is welcome to build on top of.
			</p>
			<p>
				<b>Great ideas for the future:</b>
				<ul>
					<li>Use localStorage for favorites</li>
					<li>A lot of error handling</li>
					<li>... and so much more.</li>
				</ul>
			</p>
			<p>
				<a href="https://github.com/MartinMouritzen/PodcastPlayer">Github Repo</a>
			</p>
		</div>
	);
}
export default Home;