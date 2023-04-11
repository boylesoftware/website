import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { Image } from './image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as styles from './case-studies.module.scss';

export function CaseStudies({ title, content }) {
	return (
		<section className={styles.sectionStudies}>
			{title ? <h2 className={styles.sectionHeading}>{title}</h2> : null}
			<div className={classnames(styles.gridStudies)}>
				{content.map((c) => (
					<div className={styles.item} key={c.id}>
						{c.image?.gatsbyImageData ? (
							<Link to={`/case-study/${c.slug}`}>
								<Image media={c.image} alt={c.image.description} />
							</Link>
						) : null}

						{c.title ? (
							<h3 className={styles.studyTitle}>
								<Link to={`/case-study/${c.slug}`}>{c.title}</Link>
							</h3>
						) : null}

						{c.intro ? (
							<div className={styles.intro}>{renderRichText(c.intro)}</div>
						) : null}
					</div>
				))}
			</div>
		</section>
	);
}
