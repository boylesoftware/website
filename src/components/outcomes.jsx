import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import * as styles from './outcomes.module.scss';

export function Outcomes({ text, highlights }) {
	return (
		<section className={styles.outcomes}>
			<div className={styles.text}>
				<h2 className={styles.sectionHeading}>Outcomes</h2>
				{renderRichText(text)}
			</div>
			<div>
				{highlights.map((c) => (
					<div key={c.id}>{renderRichText(c.text)}</div>
				))}
			</div>
		</section>
	);
}
