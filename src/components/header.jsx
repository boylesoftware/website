import { Link } from 'gatsby';
import React from 'react';

import * as styles from './header.module.scss';

const Header = ({ siteTitle }) => (
	<header>
		<Link to='/' className={styles.logo}>
			<div className={styles.logoType}>
				Boyle
				<br /> Software
			</div>
			<div className={styles.logoTagline}>
				A <strong>Beyondsoft</strong> Company
			</div>
		</Link>
		<nav aria-labelledby='primary-navigation' className={styles.primaryNav}>
			<h2 id='primary-navigation' className={styles.visuallyHidden}>
				Primary navigation
			</h2>
			<ul>
				<li>
					<Link to='/services'>services</Link>
				</li>
				<li>
					<Link to='/about'>about</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
