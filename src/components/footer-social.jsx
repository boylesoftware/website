import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Image } from './image';

import * as styles from './footer-social.module.scss';

const query = graphql`
	query {
		icons: contentfulSection(contentful_id: { eq: "4yEOc7e8KcGwLo13czLagx" }) {
			title
			content {
				...contentfulMedia
			}
		}
	}
`;

const FooterSocial = () => {
	const data = useStaticQuery(query);
	return (
		<div className={styles.footerSocial}>
			{data.icons.title ? (
				<h2 className={styles.socialHeading}>{data.icons.title}</h2>
			) : null}
			<ul>
				{data.icons.content.map((icon) => (
					<li key={icon.id} className={styles.icon}>
						<a href={icon.url}>
							<Image media={icon.media} alt={icon.media.description} />
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterSocial;
