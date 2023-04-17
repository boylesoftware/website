import React from 'react';
import { Link } from 'gatsby';

const NavLinks = () => {
	return (
		<ul>
			<li>
				<Link to='/services'>services</Link>
			</li>
			<li>
				<Link to='/work'>work</Link>
			</li>
			<li>
				<Link to='/about'>about</Link>
			</li>
			<li>
				<Link to='/contact'>contact</Link>
			</li>
		</ul>
	);
};

export default NavLinks;
