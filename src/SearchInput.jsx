import React, { useState } from 'react';

import { useHistory } from "react-router-dom";

function SearchInput(props) {
	let history = useHistory();
	const [searchText, setSearchText] = useState(0);

	const search = (event) => {
		history.push('/search/' + searchText);
		event.preventDefault();
		return false;
	}

	return (
		<form method="GET" onSubmit={search} style={{ display: 'flex', flex: 1 }}>
			<input type="text" placeholder="Search for a Podcast" onChange={(event) => { setSearchText(event.target.value); }} style={{ padding: 20, flex: 1 }} />
			<input type="submit" value="Search for podcasts" />
		</form>
	);
}
export default SearchInput;