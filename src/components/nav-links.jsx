import React from 'react';
import { Link } from './link';

const NavLinks = () => {
	return (
		<ul>
			<li>
				<Link to='/services'>Services</Link>
			</li>
			<li>
				<Link to='/work'>Work</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
			<li>
				<Link to='/news'>News</Link>
			</li>
			<li>
				<Link to='/careers'>Careers</Link>
			</li>
			<li>
				<Link to='/contact'>Contact</Link>
			</li>
		</ul>
	);
};

export default NavLinks;
