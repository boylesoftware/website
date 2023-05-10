import React from 'react';
import { Image } from './image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from './link';

import * as styles from './service-summary.module.scss';

export function ServiceList({ title, image, slug, intro, highlights }) {
	return (
		<section className={styles.service}>
			<div className={styles.summaryImage}>
				<Link to={`/services/${slug}`}>
					<Image media={image} alt={image.description} />
				</Link>
			</div>
			<div className={styles.summaryContent}>
				<h2 className={styles.pageHeading}>
					<Link to={`/services/${slug}`}>{title}</Link>
				</h2>

				<div className={styles.intro}>
					{intro ? renderRichText(intro) : null}
				</div>

				{highlights ? (
					<div className={styles.highlights}>{renderRichText(highlights)}</div>
				) : null}

				<Link to={`/services/${slug}`} cssClass={styles.cta}>
					<span>Learn more</span>
				</Link>
			</div>
		</section>
	);
}
