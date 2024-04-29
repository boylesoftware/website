import React from 'react';
import classnames from 'classnames';
import { Link } from './link';
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
							<Link to={`/work/case-studies/${c.slug}`}>
								<Image media={c.image} alt={c.image.description} />
							</Link>
						) : null}

						<h3 className={styles.studyTitle}>
							<Link to={`/work/case-studies/${c.slug}`}>{c.title}</Link>
						</h3>

						{c.intro ? renderRichText(c.intro) : null}
					</div>
				))}
			</div>
			<Link to='/work/case-studies' cssClass={styles.cta}>
				<span>View all case studies</span>
			</Link>
		</section>
	);
}
