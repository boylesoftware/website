import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { Image } from './image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as styles from './featured-list.module.scss';

export function FeaturedList({ title, cssClass, content }) {
	return (
		<section className={styles[cssClass]}>
			{title ? <h2 className={styles.listHeading}>{title}</h2> : null}
			<div className={classnames(styles.listContent)}>
				{content.map((c) => (
					<div className={styles.item} key={c.id}>
						{c.image?.gatsbyImageData ? (
							<Link to={`/${c.slug}`}>
								<Image media={c.image} alt={c.image.description} />
							</Link>
						) : null}

						{c.title ? (
							<h3 className={styles.articleHeading}>
								<Link to={`/${c.slug}`}>{c.title}</Link>
							</h3>
						) : null}

						{c.intro ? (
							<div className={styles.intro}>{renderRichText(c.intro)}</div>
						) : null}
						{/* {featuredListContent.text ? (
							<div className={styles.text}>
								{renderRichText(featuredListContent.text)}
							</div>
						) : null} */}
					</div>
				))}
			</div>
		</section>
	);
}