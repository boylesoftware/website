import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Image } from './image';
import { Link } from 'gatsby';
import * as styles from './section.module.scss';

export function Section({ title, cssClass, content }) {
	return (
		<section className={styles[cssClass]}>
			{title ? (
				<h2>
					{title}
					<sup>[section]</sup>
				</h2>
			) : null}
			{content.map((sectionContent) => (
				<div key={sectionContent.id}>
					{sectionContent.image?.gatsbyImageData ? (
						<Link to={sectionContent.slug}>
							<Image
								media={sectionContent.image}
								alt={sectionContent.image.description}
							/>
						</Link>
					) : null}
					<h3 className={styles.articleHeading}>
						<Link to={sectionContent.slug}>
							{sectionContent.title ? sectionContent.title : null}
						</Link>
					</h3>

					{sectionContent.intro ? renderRichText(sectionContent.intro) : null}
					{sectionContent.text ? renderRichText(sectionContent.text) : null}
				</div>
			))}
		</section>
	);
}
