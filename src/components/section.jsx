import React from 'react';
import classnames from 'classnames';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Image } from './image';
import * as styles from './section.module.scss';

export function Section({ title, cssClass, layout, content }) {
	return (
		<section className={styles[cssClass]}>
			<div className={classnames(styles.sectionContent, styles[layout])}>
				{content.map((c) => (
					<div key={c.id}>
						{/* {c.image?.gatsbyImageData ? (
							<Link to={`/news/${c.slug}`}>
								<Image media={c.image} alt={c.image.description} />
							</Link>
						) : null} */}
						{c.media?.gatsbyImageData ? (
							<Image media={c.media} alt={c.media.description} />
						) : null}

						{c.text ? (
							<div>
								<h2 className={styles.sectionHeading}>{title}</h2>
								{renderRichText(c.text)}
							</div>
						) : null}
					</div>
				))}
			</div>
		</section>
	);
}
