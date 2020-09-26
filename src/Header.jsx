import React from 'react';

import { Link } from 'react-router-dom';

import SearchInput from './SearchInput';

import {ReactComponent as HomeIcon} from './resources/home.svg';

function Header(props) {
	return (
		<div className="header">
			<Link to={'/'}>
				<HomeIcon fill='#FFFFFF' style={{ marginRight: 15}} alt='Home' />
			</Link>
			<SearchInput />
		</div>
	);
}
export default Header;