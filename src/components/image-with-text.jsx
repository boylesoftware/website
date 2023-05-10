import React from 'react';
import classnames from 'classnames';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Image } from './image';
import { Link } from './link';

import * as styles from './image-with-text.module.scss';

export function ImageWithText({
	title,
	image,
	text,
	ctaLink,
	ctaLabel,
	cssClass,
	layout,
}) {
	return (
		<section className={styles[cssClass]}>
			<div className={classnames(styles.sectionContent, styles[layout])}>
				<div>
					{image?.gatsbyImageData ? (
						<Image media={image} alt={image.description} />
					) : null}
				</div>
				{text ? (
					<div className={styles.sectionText}>
						<h2 className={styles.sectionHeading}>{title}</h2>
						{renderRichText(text)}
						{ctaLink ? (
							<div className={styles.button}>
								<Link to={ctaLink}>
									<span>{ctaLabel}</span>
								</Link>
							</div>
						) : null}
					</div>
				) : null}
			</div>
		</section>
	);
}
