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
					<div key={c.id}>
						{c.image?.gatsbyImageData ? (
							<Link to={`/case-study/${c.slug}`}>
								<Image media={c.image} alt={c.image.description} />
							</Link>
						) : null}

						<h3 className={styles.studyTitle}>
							<Link to={`/case-study/${c.slug}`}>{c.title}</Link>
						</h3>

						{c.intro ? renderRichText(c.intro) : null}
					</div>
				))}
			</div>
		</section>
	);
}
