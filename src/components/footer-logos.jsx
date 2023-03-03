import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Image } from './image';

import * as styles from './footer-logos.module.scss';

const query = graphql`
	query {
		logos: contentfulSection(contentful_id: { eq: "3LSQ8TAEit8SBWppBAnwn7" }) {
			title
			cssClass
			content {
				... on ContentfulMedia {
					title
					media {
						gatsbyImageData(width: 400, placeholder: BLURRED)
						description
						file {
							url
						}
					}
				}
			}
		}
	}
`;

const FooterLogos = () => {
	const data = useStaticQuery(query);
	return (
		<div className={styles[data.logos.cssClass]}>
			{data.logos.title ? (
				<h2 className='visually-hidden'>{data.logos.title}</h2>
			) : null}
			{data.logos.content.map((logo) => (
				<div key={logo.id} className={styles.logo}>
					<Image media={logo.media} alt={logo.media.description} />
				</div>
			))}
		</div>
	);
};

export default FooterLogos;
