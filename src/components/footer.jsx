import { Link } from 'gatsby';
import React from 'react';

import * as styles from './footer.module.scss';

const Footer = ({ siteTitle }) => (
	<footer>
		<nav aria-labelledby='primary-navigation'>
			<h2 id='primary-navigation' className={styles.visuallyHidden}>
				Primary navigation
			</h2>
			<ul className={styles.mainNav}>
				<li>
					<Link to='/services'>services</Link>
				</li>
				<li>
					<Link to='/about'>about</Link>
				</li>
			</ul>
		</nav>
		<div className={styles.jobOpenings}>
			<h2 className={styles.footerHeading}>Join us</h2>
			<p>Join our diverse communities based in NYC and Kyiv.</p>
			<p>
				<a href='https://careers.boylesoftware.com/' target='_blank'>
					View job openings
				</a>
			</p>
		</div>
		<div className={styles.social}>
			<h2 className={styles.footerHeading}>Let's keep in touch</h2>
			<a href='#' target='_blank'>
				Linked In
			</a>
			<a href='#' target='_blank'>
				Linked In
			</a>
			<a href='#' target='_blank'>
				Linked In
			</a>
		</div>
		<div className={styles.footerLogos}>Logos</div>
		<nav aria-labelledby='secondary-navigation' className={styles.secondaryNav}>
			<h2 id='secondary-navigation' className={styles.visuallyHidden}>
				Secondary navigation
			</h2>
			<ul>
				<li>Accessibility statement</li>
				<li>Legal information</li>
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
