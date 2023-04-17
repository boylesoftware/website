import { Link } from 'gatsby';
import React from 'react';
import FooterBadges from './footer-badges';
import FooterSocial from './footer-social';

import * as styles from './footer.module.scss';

const Footer = () => (
	<footer>
		<nav aria-labelledby='primary-navigation' className={styles.primaryNav}>
			<h2 id='primary-navigation' className={styles.visuallyHidden}>
				Primary navigation
			</h2>
			<ul className={styles.mainNav}>
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
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>

		<FooterSocial />
		<FooterBadges />
		<nav aria-labelledby='secondary-navigation' className={styles.secondaryNav}>
			<h2 id='secondary-navigation' className={styles.visuallyHidden}>
				Secondary navigation
			</h2>
			<ul>
				<li>
					<Link to='/accessibility-statement'>Accessibility Statement</Link>
				</li>
				<li>
					<Link to='/legal-information'>Legal Information</Link>
				</li>
				<li>Terms of Service</li>
			</ul>
		</nav>
		<div className={styles.copyright}>
			© 1988-{new Date().getFullYear()} Boyle Software.Inc., All Rights
			Reserved.
		</div>
	</footer>
);

export default Footer;
