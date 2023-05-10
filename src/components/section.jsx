import React from 'react';
import classnames from 'classnames';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Image } from './image';
import * as styles from './section.module.scss';

export function Section({ title, cssClass, layout, content }) {
	return (
		<section className={styles[cssClass]}>
			{title ? <h2>{title}</h2> : null}

			<div className={classnames(styles.sectionContent, styles[layout])}>
				{content.map((c) => (
					<div key={c.id}>
						{c.media?.gatsbyImageData ? (
							<Image media={c.media} alt={c.media.description} />
						) : null}

						{c.text ? (
							<div className={c.cssClass}>{renderRichText(c.text)}</div>
						) : null}
					</div>
				))}
			</div>
		</section>
	);
}
