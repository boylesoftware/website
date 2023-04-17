import { Link } from 'gatsby';
import React, { useState } from 'react';
import NavLinks from './nav-links';
import classnames from 'classnames';

import * as styles from './header.module.scss';

const Header = ({ siteTitle }) => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
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

				{navbarOpen ? (
					<div className={styles.navbox}>
						<NavLinks />
					</div>
				) : (
					<div className={classnames(styles.navbox, styles.navboxOpen)} open>
						<NavLinks />
					</div>
				)}
			</nav>

			<div
				className={styles.toggle}
				navbarOpen={navbarOpen}
				onClick={() => setNavbarOpen(!navbarOpen)}>
				{!navbarOpen ? (
					<div
						className={classnames(styles.toggleIcon, styles.toggleIconOpen)}
						open></div>
				) : (
					<div className={styles.toggleIcon}></div>
				)}
			</div>
		</header>
	);
};

export default Header;
