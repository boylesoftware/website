import React from 'react';
import { Image } from './image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Link } from 'gatsby';

import * as styles from './grid.module.scss';

export function Grid({ title, intro, cssClass, linkGridItems, content }) {
	return (
		<>
			<section className={styles[cssClass]}>
				<h2>[grid] {title}</h2>
				{intro ? (
					<div className={styles.intro}>{renderRichText(intro)}</div>
				) : null}
				<div className={styles.grid}>
					{content.map((gridContent) => (
						<div key={gridContent.id}>
							<h3>{gridContent.title}</h3>
							{gridContent.image ? (
								<Link to={gridContent.slug}>
									<Image
										media={gridContent.image}
										alt={gridContent.image.description}
									/>
								</Link>
							) : null}

							{gridContent.text ? renderRichText(gridContent.text) : null}
							{linkGridItems === true ? (
								<Link to={gridContent.slug}>Learn more</Link>
							) : null}
						</div>
					))}
				</div>
			</section>
		</>
	);
}
