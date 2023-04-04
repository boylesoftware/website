import React from 'react';
import classnames from 'classnames';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Image } from './image';
import { Link } from 'gatsby';
import * as styles from './section.module.scss';

export function Section({ title, cssClass, layout, content }) {
	return (
		<section className={styles[cssClass]}>
			{title ? <h2 className={styles.sectionHeading}>{title}</h2> : null}
			<div className={classnames(styles.sectionContent, styles[layout])}>
				{content.map((c) => (
					<div key={c.id}>
						{c.image?.gatsbyImageData ? (
							<Link to={`/news/${c.slug}`}>
								<Image media={c.image} alt={c.image.description} />
							</Link>
						) : null}
						{c.media?.gatsbyImageData ? (
							<Link to={`/news/${c.slug}`}>
								<Image media={c.media} alt={c.media.description} />
							</Link>
						) : null}

						{c.title ? (
							<h3 className={styles.articleHeading}>
								<Link to={`/news/${c.slug}`}>{c.title}</Link>
							</h3>
						) : null}

						{c.intro ? (
							<div className={styles.intro}>{renderRichText(c.intro)}</div>
						) : null}
						{c.text ? (
							<div className={styles.text}>{renderRichText(c.text)}</div>
						) : null}
					</div>
				))}
			</div>
		</section>
	);
}
