import React from 'react';
import { Image } from './image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from 'gatsby';

import * as styles from './grid.module.scss';

export function Grid({ title, intro, cssClass, content }) {
	console.log('Grid content', content);
	return (
		<section className={styles[cssClass]}>
			<h2 className={styles.gridHeading}>
				{title}
				<sup>[grid]</sup>
			</h2>
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
							<Image media={item.media} alt={item.media?.description} />
						)}
						<h3>{item.title}</h3>

						{/* {gridContent.text ? renderRichText(gridContent.text) : null} */}
						{/* {linkGridItems === true ? (
								<Link to={gridContent.slug}>Learn more</Link>
							) : null} */}
					</div>
				))}
			</div>
		</section>
	);
}
