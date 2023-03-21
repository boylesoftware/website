import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Image } from './image';
import { Link } from 'gatsby';
import * as styles from './section.module.scss';

export function Section({ title, cssClass, content }) {
	console.log('faust', cssClass);
	return (
		<section className={styles[cssClass]}>
			{title ? (
				<h2 className={styles.sectionHeading}>
					{title}
					<sup>[section]</sup>
				</h2>
			) : null}
			<div className={styles.sectionContent}>
				{content.map((sectionContent) => (
					<div className={styles.item} key={sectionContent.id}>
						{sectionContent.image?.gatsbyImageData ? (
							<Link to={sectionContent.slug}>
								<Image
									media={sectionContent.image}
									alt={sectionContent.image.description}
								/>
							</Link>
						) : null}

						{sectionContent.title ? (
							<h3 className={styles.articleHeading}>
								<Link to={sectionContent.slug}>{sectionContent.title}</Link>
							</h3>
						) : null}

						{sectionContent.intro ? (
							<div className={styles.intro}>
								{renderRichText(sectionContent.intro)}
							</div>
						) : null}
						{sectionContent.text ? (
							<div className={styles.intro}>
								{renderRichText(sectionContent.text)}
							</div>
						) : null}
					</div>
				))}
			</div>
		</section>
	);
}
