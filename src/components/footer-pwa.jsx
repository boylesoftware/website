import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Image } from './image';
import { Link } from './link';

import * as styles from './footer-pwa.module.scss';

const query = graphql`
	query {
		pwa: contentfulSection(contentful_id: { eq: "1Lidj3GS2jzz2dDnMdRfNN" }) {
			title
			content {
				...contentfulMedia
			}
		}
	}
`;

const FooterPwa = () => {
	const data = useStaticQuery(query);
	return (
		<div className={styles.pwa}>
			{data.pwa.title ? (
				<h2 className={styles.logosHeading}>{data.pwa.title}</h2>
			) : null}
			{data.pwa.content.map((icon) => (
				<div key={icon.id} className={styles.icon}>
					<Link to='/pwa-shortcut-instructions'>
						<Image media={icon.media} alt={icon.media.description} />
					</Link>
				</div>
			))}
			<Link to='/pwa-shortcut-instructions' className={styles.pwaCta}>
				<span>Learn how</span>
			</Link>
		</div>
	);
};

export default FooterPwa;
