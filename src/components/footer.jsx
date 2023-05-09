import { Link } from './link';
import React from 'react';
import NavLinks from './nav-links';

import FooterBadges from './footer-badges';
import FooterPwa from './footer-pwa';
import FooterSocial from './footer-social';

import * as styles from './footer.module.scss';

const Footer = () => (
	<footer>
		<nav aria-labelledby='primary-navigation' className={styles.primaryNav}>
			<h2 id='primary-navigation' className={styles.visuallyHidden}>
				Primary navigation
			</h2>
			<NavLinks />
		</nav>
		<FooterSocial />
		<FooterPwa />
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
