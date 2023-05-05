import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Image } from './image';
import { Link } from './link';

import * as styles from './footer-badges.module.scss';

const query = graphql`
	query {
		logos: contentfulSection(contentful_id: { eq: "3LSQ8TAEit8SBWppBAnwn7" }) {
			title
			content {
				...contentfulMedia
			}
		}
	}
`;

const FooterBadges = () => {
	const data = useStaticQuery(query);
	return (
		<div className={styles.footerBadges}>
			{data.logos.title ? (
				<h2 className={styles.logosHeading}>{data.logos.title}</h2>
			) : null}
			<ul>
				{data.logos.content.map((logo) => (
					<li key={logo.id} className={styles.logo}>
						<Link to={logo.url}>
							<Image media={logo.media} alt={logo.media.description} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterBadges;
