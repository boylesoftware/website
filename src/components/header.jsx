import { Link } from 'gatsby';
import React from 'react';

import * as s from './header.module.scss';

const Header = ({ siteTitle }) => (
	<header>
		<Link to='/' className={s.logo}>
			<div className={s.logoType}>
				Boyle
				<br /> Software
			</div>
			<div className={s.logoTagline}>
				A <strong>Beyondsoft</strong> Company
			</div>
		</Link>
		<ul>
			<li>
				<Link to='/about'>about</Link>
			</li>
		</ul>
	</header>
);

export default Header;
