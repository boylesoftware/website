import React from 'react';
import { Image } from './image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from 'gatsby';

import * as styles from './grid.module.scss';

export function Grid({ title, intro, cssClass, ctaLink, ctaLabel, content }) {
	return (
		<section className={styles[cssClass]}>
			<h2 className={styles.gridHeading}>{title}</h2>
			{intro ? (
				<div className={styles.gridIntro}>{renderRichText(intro)}</div>
			) : null}
			{ctaLink ? (
				<Link to={ctaLink} className={styles.cta}>
					<span>{ctaLabel}</span>
				</Link>
			) : null}
			<div className={styles.grid}>
				{content.map((item) => (
					<div key={item.id}>
						{item.url ? (
							<Link to={item.url}>
								<Image media={item.media} alt={item.media?.description} />
							</Link>
						) : (
							<Image media={item.media} alt={item.media?.description} />
						)}
						<div className={styles.itemTitle}>{item.title}</div>
						{item.url ? <Link to={item.url}>Learn more</Link> : null}
					</div>
				))}
			</div>
		</section>
	);
}
