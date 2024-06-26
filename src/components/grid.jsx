import React from 'react';
import { Image } from './image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from './link';

import * as styles from './grid.module.scss';

export function Grid({
	title,
	jobTitle,
	intro,
	cssClass,
	ctaLink,
	ctaLabel,
	content,
}) {
	return (
		<section className={styles[cssClass]}>
			<h2 className={styles.gridHeading}>{title}</h2>
			{intro ? (
				<div className={styles.gridIntro}>{renderRichText(intro)}</div>
			) : null}

			<div className={styles.grid}>
				{content.map((item) => (
					<div key={item.id}>
						{item.url ? (
							<Link to={item.url}>
								<Image media={item.media} alt={item.media?.description} />
							</Link>
						) : (
              <div className={styles.imageContainer}>
							<Image media={item.media} alt={item.media?.description} />
              </div>
						)}
						<div className={styles.itemTitle}>{item.title}</div>
						{item.jobTitle ? (
							<div className={styles.jobTitle}>{item.jobTitle}</div>
						) : null}
						{/* {item.url ? <Link to={item.url}>Learn more</Link> : null} */}
					</div>
				))}
			</div>
			{ctaLink ? (
				<Link to={ctaLink} cssClass={styles.cta}>
					<span>{ctaLabel}</span>
				</Link>
			) : null}
		</section>
	);
}
